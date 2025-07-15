import TodoItem from "@/components/todoComponents/todoitem";
export default function TodoList({ todos, toggeleDone, deleteTodo, editTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggeleDone={toggeleDone}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
