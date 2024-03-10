import React from "react";
import TopNavBar from "./TopNavBar";
import MainContainer from "./MainContainer";
import BooksGrid from "./BooksGrid";

export async function fetchBooks() {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/178684d1afef4531b2ede94d96842317/books",
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
    return [];
  }
}
const HomePage = async ({ isAdmin = false }) => {
  const books = await fetchBooks();
  return (
    <div>
      <TopNavBar isAdmin={isAdmin} />
      <MainContainer className="">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        <BooksGrid books={books} isAdmin={isAdmin} />
      </MainContainer>
    </div>
  );
};

export default HomePage;
