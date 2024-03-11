"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { deleteBook } from "../utils/api";
interface Props {
  bookId: number | string;
  onDelete?: (bookId: string | number) => void;
}
const AdminControls = ({ bookId, onDelete }: Props) => {
  const router = useRouter();

  const OnEditClicked = () => {};
  const onDeleteClicked = async (bookId: number | string) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const response = await deleteBook(bookId);
        if (response && response.ok) {
          alert("Book deleted successfully!");
          onDelete && onDelete(bookId);
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
    <div className="card-actions flex justify-end ml-1 mr-1 mt-4 space-x-2 ">
      <button className="btn btn-primary flex-1" onClick={OnEditClicked}>
        Edit
      </button>
      <button
        className="btn btn-error flex-1 "
        onClick={() => onDeleteClicked(bookId)}
      >
        Delete
      </button>
    </div>
  );
};

export default AdminControls;
