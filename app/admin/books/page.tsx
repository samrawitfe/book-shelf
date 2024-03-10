import { Book } from "@/app/common/type";
import BooksGrid from "@/app/components/BooksGrid";
import MainContainer from "@/app/components/MainContainer";
import TopNavBar from "@/app/components/TopNavBar";
import { fetchBooks } from "@/app/utils/booksApi";
import React from "react";

const BooksPage = async () => {
  const books = await fetchBooks();
  return (
    <div>
      <TopNavBar isAdmin={true} />
      <MainContainer className="">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        <BooksGrid books={books} isAdmin={true} />
      </MainContainer>
    </div>
  );
};

export default BooksPage;
