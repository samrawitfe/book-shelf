import React from "react";
import CloseModalButton from "./CloseModalButton";

interface Props {
  bookId: string;
}

export async function getBook(bookId: number | string) {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/178684d1afef4531b2ede94d96842317/books/" +
        bookId,
      {
        next: {
          revalidate: 20,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const books = await response.json();
    console.log(books);
    return books;
  } catch (error: any) {
    console.log(error.message);
    return {};
  }
}

const BookDetailsModal = async ({ bookId }: Props) => {
  const book = await getBook(bookId);

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
      </div>
    </div>
  );
};

export default BookDetailsModal;
