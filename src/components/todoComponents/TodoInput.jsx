export default function TodoInput({ input, setInput, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambahkan Tugas Baru"
        className="fle justify-center px-7 py-2 ronded border border-black-300 focus:outline-none focus:ring-blue-500 text-black"
      />
      <button
        onClick={addTodo}
        className="ml-3 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 border-2 mt-4 ml-5"
      >
        Simpan
      </button>
    </div>
  );
}
