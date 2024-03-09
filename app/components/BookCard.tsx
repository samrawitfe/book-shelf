import React from "react";
import { Book } from "../common/type";

interface Props {
  book: Book;
  showAdminControls: boolean;
}

const BookCard = ({ book, showAdminControls = false }: Props) => {
  return (
    <div className="book-card">
      {/* Book details */}
      <h3>{book.title}</h3>
      {/* Conditional admin controls */}
      {showAdminControls && (
        <div className="admin-controls">{/* Admin buttons */}</div>
      )}
    </div>
  );
};

export default BookCard;
