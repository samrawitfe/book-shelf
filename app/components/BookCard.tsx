import React from "react";
import { Book } from "../common/type";
import EditBookButton from "./EditBookButton";
import DeleteBookButton from "./DeleteBookButton";

interface Props {
  book: Book;
  showAdminControls: boolean;
  onEdit: (book: Book) => void;
  onDelete: (bookId: string | number) => void;
}
const BookCard = ({
  book,
  showAdminControls = false,
  onEdit,
  onDelete,
}: Props) => {
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
        <div className="card-actions flex justify-end ml-1 mr-1 mt-4 space-x-2 ">
          <EditBookButton book={book} onBookUpdated={onEdit} />
          <DeleteBookButton bookId={book._id} onBookDeleted={onDelete} />
        </div>
      )}
    </div>
  );
};

export default BookCard;
