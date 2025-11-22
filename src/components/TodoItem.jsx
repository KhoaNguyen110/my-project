export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white p-3 mb-3 rounded-xl shadow">
      <span className="flex items-center gap-3">
        <span
          className={
            task.completed
              ? "ph ph-check-circle text-green-500 text-xl"
              : "ph ph-circle text-cyan-400 text-xl"
          }
        ></span>

        <span
          className={`font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="px-3 py-2 bg-cyan-500 text-white rounded-xl"
        >
          {task.completed ? "Unmark" : "Mark"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-2 bg-red-500 text-white rounded-xl"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
