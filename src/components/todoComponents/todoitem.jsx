export default function TodoItem({ todo, toggeleDone,deleteTodo, editTodo }) {
    return(
        <li
        className={`flex justify-between items-center px-4 py-2 rounded text-black ${todo.done 
            ? `bg-green-100 test-gray-500`: `bg-white border border-gray-300 hover:bg-gray-50`}`}
        >
            <span onClick={()=> toggeleDone(todo.id)} className={`flex-grow cursor-pointer ${todo.done ? 'line-through':''}`}>
                {todo.text}
            </span>
            <div className="flex gap-2 ml-2">
                <button
                onClick={()=> editTodo(todo.id)}
                className="text-xs bg-yellow-500 text-black px-2 py-1 rounded hover:bg-yellow-600"
                >
                   Edit
                </button>
                      <button
                onClick={()=> deleteTodo(todo.id)}
                className="text-xs bg-red-500 text-black px-2 py-1 rounded hover:bg-red-600"
                >
                   HAPUS
                </button>


            </div>
        </li>
    
    )

}