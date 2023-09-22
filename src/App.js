import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setNewTask('');
        setEditIndex(null);
      } else {
        // Add new task
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-Bg1 to-Bg2 
      flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-todoBg p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h1 className="text-3xl font-semibold text-center mb-4 text-btnHover">
         To-Do App
        </h1>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-Bg1 text-black"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`bg-Bg1  text-txtColor py-2 px-4 rounded hover:bg-btnHover  transition duration-300
          ${editIndex !== null ? 'mr-2' : ''}`}
          onClick={addTask}
        >
          {editIndex !== null ? 'Edit Task' : 'Add Task'}
        </motion.button>
        {editIndex !== null && (
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-400 text-textColor py-2 px-4 rounded hover:bg-btnHover"
            onClick={() => {
              setNewTask('');
              setEditIndex(null);
            }}
          >
            Cancel
          </motion.button>
        )}
        <AnimatePresence>
          <ul className="mt-4">
            {tasks.map((task, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center border-b py-2 text-text-color"
              >
                <span className="flex-grow">{task}</span>
                <button
                  className="text-txtColor rounded transition duration-300 bg-[#A6FF96] px-5 py-2 hover:bg-[#8fad89] mx-1"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>
                <button
                  className="text-txtColor rounded transition duration-300 bg-[#F8FF95] px-5 py-2  hover:bg-[#9da073]"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default TodoApp;
