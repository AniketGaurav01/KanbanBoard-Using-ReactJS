import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import toast from "react-hot-toast";

function CreateTask({ closeModal }) {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !description || !dueDate) {
      toast.error("Please fill all fields!");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      description,
      priority,
      dueDate,
    };

    dispatch(addTask(newTask));
    toast.success("Task Added Successfully!");
    closeModal();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Task Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Priority</label>
          <select
            className="w-full p-2 border rounded-lg"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Due Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
