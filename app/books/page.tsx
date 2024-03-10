import React from "react";
import BooksGrid from "../components/BooksGrid";
import { fetchBooks } from "../utils/booksApi";
import TopNavBar from "../components/TopNavBar";
import MainContainer from "../components/MainContainer";

const BooksPage = async () => {
  const books = await fetchBooks();
  return (
    <div>
      <TopNavBar isAdmin={false} />
      <MainContainer className="">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        <BooksGrid books={books} isAdmin={false} />
      </MainContainer>
    </div>
  );
};
export default BooksPage;
