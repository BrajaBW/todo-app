"use client";
import { useState } from "react";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";
export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //menambah todo baru
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id:crypto.randomUUID(), text: input, done: false }]);
    setInput("");
  };

  //menandai selesai /belum
  const toggeleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todos, done: !todo.done } : todo
      )
    );
  };

  //delete Todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //pemberitahuan harap di isi 
  // const hastTodos = todos.length > 0;


  //editTodo
  const editTodo = (id) => {
    const newText = prompt("edit tugas");
    if (newText !== null && newText.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="max-w-md space-y-4">
        <h1 className="text-6xl font-bold text-center text-black">TODO LIST</h1>
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        
        {/* {2.tenarry} */}
        {/* {hastTodos ? (
          <TodoList
            todos={todos}
            toggeleDone={toggeleDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ) : (
          <p className="text-center text-black">KOSONG HARAP DI ISI</p>
        )} */}

        {/* {3. logical &&} */}
        {/* {
          hastTodos && <TodoList
            todos={todos}
            toggeleDone={toggeleDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        }
        {!hastTodos && <p className="text-center text-black">KOSONG HARAP DI ISI</p> } */}
        <TodoList
            todos={todos}
            toggeleDone={toggeleDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
      </div>
    </main>
  );
}
