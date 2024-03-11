"use client";
import React, { useState } from "react";
import { Book } from "../common/type";
import BookFormModal from "./BookFormModal";

interface Props {
  book: Book;
  onBookUpdated: (book: Book) => void;
}
const EditBookButton = ({ book, onBookUpdated }: Props) => {
  const [openBookForm, setBookFormOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-primary flex-1"
        onClick={() => setBookFormOpen(true)}
      >
        Edit
      </button>
      {openBookForm && (
        <BookFormModal
          book={book}
          onBookSaved={onBookUpdated}
          onClose={() => setBookFormOpen(false)}
        />
      )}
    </>
  );
};

export default EditBookButton;
