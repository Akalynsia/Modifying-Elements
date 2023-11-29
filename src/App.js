import { useState } from "react";
import { Input } from "./Input";
import { EditForm } from "./EditForm";

function App() {
  const [books, setBooks] = useState([
    { id: 10, title: "Harry Potter" }, // Değiştirmeyin
    { id: 17, title: "Açlık Oyunları" },
    { id: 54, title: "Game of Thrones" }
  ]);

  const updateBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const addBook = (title) => {
    if (title.trim() !== "") {
      const book = { title: title, id: ~~(Math.random() * 1000) };
      setBooks([...books, book]);
    } else {
      console.error("Cannot be empty");
    }
  };

  const renderedBooks = books.map((book, i) => {
    return (
      <li key={book.id}>
        Başlık: {book.title}, Id: {book.id}
      </li>
    );
  });

  return (
    <div>
      <Input onSubmit={addBook} />
      <ol>{renderedBooks}</ol>
      <hr />
      <EditForm books={books} onSubmit={updateBookById} />
    </div>
  );
}

export default App;
