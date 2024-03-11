"use client";
import React, { useEffect, useState } from "react";
import TopNavBar from "./TopNavBar";
import MainContainer from "./MainContainer";
import BookCard from "./BookCard";
import { fetchBooks } from "../utils/api";
import { Book } from "../common/type";

const HomePage = ({ isAdmin = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const fetchedBooks: Book[] = await fetchBooks();
        setAllBooks(fetchedBooks);
        setDisplayedBooks(fetchedBooks);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setDisplayedBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );
      setDisplayedBooks(filteredBooks);
    }
  };

  const onBookDeleted = (bookId: string | number) => {
    setAllBooks(allBooks.filter((book: Book) => book._id !== bookId));
  };
  const onBookAdded = (book: Book) => {
    setAllBooks(allBooks.concat([book]));
  };
  const onBookEditted = (updatedBook: Book) => {
    setAllBooks(
      allBooks.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
  };

  return (
    <div>
      <TopNavBar
        isAdmin={isAdmin}
        onAddBook={onBookAdded}
        onSearch={handleSearch}
      />
      <MainContainer className="">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        {isLoading ? (
          <p>Loading books...</p> // Simple text loading indicator
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedBooks.length === 0 ? (
              <p>No books found!</p>
            ) : (
              displayedBooks.map((book) => (
                <BookCard
                  key={book._id}
                  book={book}
                  showAdminControls={isAdmin}
                  onEdit={onBookEditted}
                  onDelete={onBookDeleted}
                />
              ))
            )}
          </div>
        )}
      </MainContainer>
    </div>
  );
};

export default HomePage;
