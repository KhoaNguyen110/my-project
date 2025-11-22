import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-xl">
      <input
        className="flex-1 px-4 py-3 rounded-xl"
        placeholder="Nhập công việc..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="px-6 py-3 bg-cyan-500 text-white rounded-xl">
        Thêm
      </button>
    </form>
  );
}
