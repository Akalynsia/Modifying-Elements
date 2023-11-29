import { useState } from "react";

function EditForm({ onSubmit, books }) {
  const first = books[0];
  const [number, setNumber] = useState(first ? first.id : "");
  const [text, setText] = useState(first ? first.title : "");

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    setNumber(id);
    const book = books.find((c) => c.id === id);
    if (book) {
      setText(book.title);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(number, text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Değiştirilecek kitabın id'si</label>
        <select value={number} onChange={handleChange}>
          {books.map((c) => (
            <option key={c.id} value={c.id}>
              {c.id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Yeni Metin</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button>Değiştir</button>
    </form>
  );
}

export { EditForm };
