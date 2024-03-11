"use client";
import React, { useEffect, useState } from "react";
import TopNavBar from "./TopNavBar";
import MainContainer from "./MainContainer";
import BookCard from "./BookCard";
import { fetchBooks } from "../utils/api";
import { Book } from "../common/type";

const HomePage = ({ isAdmin = false }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      const fetchedBooks: Book[] = await fetchBooks();
      console.log(fetchedBooks);
      setBooks(fetchedBooks);
    };

    loadBooks();
  }, []);

  const onDelete = (bookId: string | number) => {
    setBooks(books.filter((book: Book) => book._id !== bookId));
  };

  return (
    <div>
      <TopNavBar isAdmin={isAdmin} />
      <MainContainer className="">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.length === 0 ? (
            <p>No books found!</p>
          ) : (
            books.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                showAdminControls={isAdmin}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      </MainContainer>
    </div>
  );
};

export default HomePage;
