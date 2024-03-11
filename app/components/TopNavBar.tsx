"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Book } from "../common/type";
import AddBookButton from "./AddBookButton";

interface Props {
  isAdmin: boolean;
  onSearch: (query: string) => void;
  onAddBook: (book: Book) => void;
}
const TopNavBar = ({ isAdmin = false, onSearch, onAddBook }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchClick = (query: string) => {
    onSearch(query);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query.trim());
    // if (query.trim() === "") {
    //   onSearch("");
    // }
  };

  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex">
        <figure className="pt-6">
          <img className="w-full h-fit" src="/logo.png" alt="Logo" />
        </figure>
        <a className="btn btn-ghost normal-case text-xl">BookShelf</a>
      </div>
      <div className="flex flex-grow gap-2 items-center">
        <div className="form-control flex-grow"></div>
        <input
          type="text"
          placeholder="Search books..."
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={() => handleSearchClick(searchQuery)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {isAdmin && <AddBookButton onAddBook={onAddBook} />}

        <Link href="/" className="btn btn-error rounded-lg">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
