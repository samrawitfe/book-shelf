import React, { useState } from "react";
import BookFormModal from "./BookFormModal";
import { Book } from "../common/type";

interface Props {
  onAddBook: (book: Book) => void;
}
const AddBookButton = ({ onAddBook }: Props) => {
  const [openBookForm, setBookFormOpen] = useState(false);
  const handleNewBookClick = () => {
    setBookFormOpen(true);
  };
  return (
    <>
      <button className="btn btn-neutral" onClick={handleNewBookClick}>
        New Book
      </button>
      {openBookForm && (
        <BookFormModal
          onBookSaved={onAddBook}
          onClose={() => setBookFormOpen(false)}
        />
      )}
    </>
  );
};

export default AddBookButton;
