import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./TodoPage.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function addTodo(e) {
    e?.preventDefault();
    const text = value.trim();
    if (!text) return;
    setTodos((prev) => [{ id: Date.now(), text, done: false }, ...prev]);
    setValue("");
    inputRef.current?.focus();
  }

  function toggle(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function remove(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <main className={styles.root}>
      <section className={styles.card}>
        <div className={styles.topRow}>
          <header className={styles.header}>
            <h2>My Todos List</h2>
            <p className={styles.sub}>Tập trung việc kế tiếp</p>
          </header>
          <Link to="/" className={styles.back}>
            &larr; Back
          </Link>
        </div>

        <form className={styles.form} onSubmit={addTodo}>
          <input
            ref={inputRef}
            className={styles.input}
            placeholder="Thêm công việc mới..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Thêm công việc"
          />
          <button className={styles.add} type="submit">
            Thêm
          </button>
        </form>

        <ul className={styles.list}>
          {todos.length === 0 && (
            <li className={styles.empty}>Không có công việc !</li>
          )}
          {todos.map((item) => (
            <li key={item.id} className={styles.item}>
              <label className={styles.row}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggle(item.id)}
                  className={styles.checkbox}
                />
                <span className={item.done ? styles.textDone : styles.text}>
                  {item.text}
                </span>
              </label>
              <div className={styles.controls}>
                <button
                  className={styles.delete}
                  onClick={() => remove(item.id)}
                  aria-label={`Xóa ${item.text}`}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
