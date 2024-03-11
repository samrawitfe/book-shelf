import React from "react";
import { Book } from "../common/type";
import AdminControls from "./AdminControls";

interface Props {
  book: Book;
  showAdminControls: boolean;
  onDelete: (bookId: string | number) => void;
}
const BookCard = ({ book, showAdminControls = false, onDelete }: Props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-transform duration-200">
      <a href={`books/${book._id}`}>
        <figure>
          <img
            className="max-h-60 w-full object-cover"
            src={book.coverImageUrl}
            alt={book.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title overflow-hidden whitespace-nowrap overflow-ellipsis">
            {book.title}
          </h2>
          <p>{book.author}</p>
        </div>
      </a>
      {showAdminControls && (
        <AdminControls bookId={book._id} onDelete={onDelete} />
      )}
    </div>
  );
};

export default BookCard;
