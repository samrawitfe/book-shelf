import React from "react";
import { Book } from "../common/type";

interface Props {
  book: Book;
  showAdminControls: boolean;
}
const BookCard = ({ book, showAdminControls = false }: Props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-transform duration-200">
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
            <div className="card-actions flex justify-end mt-4 space-x-2">
              <button className="btn btn-primary flex-1">Edit</button>
              <button className="btn btn-error flex-1">Delete</button>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default BookCard;
