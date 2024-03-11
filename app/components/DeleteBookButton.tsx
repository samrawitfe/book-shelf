"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteBook } from "../utils/api";

interface Props {
  bookId: number | string;
  onBookDeleted?: (bookId: string | number) => void;
}

const DeleteBookButton = ({ bookId, onBookDeleted }: Props) => {
  const router = useRouter();

  const onDeleteClicked = async (bookId: number | string) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const response = await deleteBook(bookId);
        if (response && response.ok) {
          alert("Book deleted successfully!");
          onBookDeleted && onBookDeleted(bookId);
          router.replace("/admin/books");
        } else {
          alert("Failed to delete the book. Please try again.");
        }
      } catch (error) {
        alert("There was an error deleting the book.");
      }
    }
  };

  return (
    <button
      className="btn btn-error flex-1 "
      onClick={() => onDeleteClicked(bookId)}
    >
      Delete
    </button>
  );
};

export default DeleteBookButton;
