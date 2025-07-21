export default function TodoItem({ todo, toggeleDone, deleteTodo, editTodo,index }) {
  return (
    <li
      className={`flex justify-between items-center px-4 py-2 rounded text-black ${
        todo.done
          ? `bg-green-100 test-gray-500`
          : `bg-white border border-black hover:bg-gray-50`
      }`}
    >
      <span
        onClick={() => toggeleDone(todo.id)}
        className={`flex-grow cursor-pointer ${
          todo.done ? "line-through" : ""
        }`}
      >
        {`${todo.id}${index}. ${todo.text}`}
      </span>
      <div className="flex gap-2 ml-2">
        <button
          onClick={() => editTodo(todo.id)}
          className="ml-3 text-xs bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className=" hover:text-amber-400 text-black"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
