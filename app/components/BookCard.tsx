import React from "react";
import { Book } from "../common/type";

interface Props {
  book: Book;
  showAdminControls: boolean;
}
const BookCard = ({ book, showAdminControls = false }: Props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg">
      <a key={book._id} href={`/books/${book._id}`}>
        <figure>
          <img
            className="max-h-60 w-full object-cover"
            src={book.coverImageUrl}
            alt={book.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p>{book.author}</p>
          {showAdminControls && (
            <button className="btn btn-secondary">Edit</button>
          )}
        </div>
      </a>
    </div>
  );
};

export default BookCard;
