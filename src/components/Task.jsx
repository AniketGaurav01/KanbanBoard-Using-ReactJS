import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";
import toast from "react-hot-toast";

function Task({ task, tasks, setTasks }) {
  const dispatch = useDispatch();

 /* This code snippet is using the `useDrag` hook from the `react-dnd` library to enable drag-and-drop
 functionality for the Task component. Here's a breakdown of what it's doing: */

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = () => {
    toast("Item Deleted", {
      icon: "💀",
      duration: 1000,
      style: {
        background: '#f56565',
        color: '#fff',
      },
    });
    dispatch(removeTask(task.id));
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 mb-4 bg-white rounded-lg shadow-lg border border-gray-200 ${
        isDragging ? "opacity-50" : "opacity-100"
      } transition-opacity duration-200 ease-in-out`}
    >
      <div className="flex flex-col">
        <h3 className="text-base font-medium text-gray-900 mb-2 truncate">{task.name}</h3>
        <p className="text-sm text-gray-700">{task.description}</p>
        
        {/* Add new priority and due date display */}
        <div className="flex items-center gap-3 mt-2">
          {task.priority && (
            <span className={`px-2 py-1 text-xs rounded-full font-medium ${
              task.priority === 'high' ? 'bg-red-100 text-red-700' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          )}
          
          {task.dueDate && (
            <span className="flex items-center text-xs text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Task;
