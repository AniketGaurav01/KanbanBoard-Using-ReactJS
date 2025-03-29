import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

function Modal({ closeModal }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) return;

    dispatch(addTask({
      id: Date.now().toString(),
      name: task.name,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: "todo"
    }));
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md z-50 relative">
        <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Name *
            </label>
            <input
              type="text"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500 min-h-[100px]"
              placeholder="Enter task description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;