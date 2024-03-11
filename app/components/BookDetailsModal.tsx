"use client";
import React, { useEffect, useState } from "react";
import CloseModalButton from "./CloseModalButton";
import { getBook } from "../utils/api";
import DeleteBookButton from "./DeleteBookButton";
import EditBookButton from "./EditBookButton";
import { Book } from "../common/type";

interface Props {
  bookId: string;
  showAdminControls: boolean;
}

const BookDetailsModal = ({ bookId, showAdminControls }: Props) => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await getBook(bookId);
      setBook(fetchedBook);
    };

    fetchBook();
  }, [bookId]);
  const onBookUpdated = (book: Book) => {
    setBook(book);
  };
  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 overflow-y-auto h-full w-full flex justify-center items-start"
      id="book-modal"
    >
      <div className="h-full w-full mx-auto  mt-10 mb-20 p-5 bg-white shadow-lg rounded-md">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {book.title}
          </h3>
          <CloseModalButton />
        </div>

        <div className="mt-2">
          <figure className="px-10 pt-10">
            <img
              src={book.coverImageUrl}
              alt={book.title}
              className="object-contain h-96 w-full"
            />
          </figure>
          <div className="text-sm text-gray-500 p-4">{book.description}</div>
          <div className="text-sm text-gray-500 p-4">
            <p>Genre: {book.genre}</p>
            <p>Publish Date: {book.publishDate}</p>
          </div>
        </div>
        {showAdminControls && (
          <div className="card-actions ml-1 mr-1 mt-4 space-x-2 w-2/5 ">
            <EditBookButton book={book} onBookUpdated={onBookUpdated} />
            <DeleteBookButton bookId={book._id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsModal;
