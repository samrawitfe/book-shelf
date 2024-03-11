import React, { useState, useEffect } from "react";
import { Book } from "../common/type";
import CloseModalButton from "./CloseModalButton";
import ReactDOM from "react-dom";
import { saveBook } from "../utils/api";

interface Props {
  book?: Book;
  onBookSaved: (book: Book) => void;
  onClose: () => void;
}

const BookFormModal = ({ book, onBookSaved, onClose }: Props) => {
  const [formData, setFormData] = useState<Omit<Book, "_id">>({
    title: "",
    author: "",
    genre: "",
    publishDate: "",
    coverImageUrl: "",
    description: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (book) {
      const { _id, ...rest } = book;
      setFormData(rest);
    }
  }, [book]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    if (!formData.title.trim()) {
      console.log("Title cannot be empty.");
      isValid = false;
      newErrors.title = "Title cannot be empty.";
    }

    if (!formData.author.trim()) {
      console.log("Title cannot be empty.aut");
      isValid = false;
      newErrors.author = "Author cannot be empty.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    setFeedback({ message: "", type: "" });

    try {
      const response = await saveBook(formData, book?._id);
      console.log(response);
      if (response.ok) {
        setFeedback({ message: "Book saved successfully!", type: "success" });
        let resultRecord;
        try {
          resultRecord = await response.json();
        } catch (error) {
          console.error("No JSON response:", error);
        }

        if (!resultRecord && book?._id) {
          resultRecord = { ...formData, _id: book._id };
        }
        onBookSaved(resultRecord);
        onClose();
      } else {
        throw new Error("Failed to save the book");
      }
    } catch (error: any) {
      setFeedback({
        message: error.message || "An error occurred while saving the book.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto flex justify-center items-center"
      id="book-modal"
    >
      <div className="w-11/12 max-w-4xl mx-auto mt-10 mb-20 p-5 bg-white shadow-lg rounded-md">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {book ? "Edit Book Details" : "Add Book"}
          </h3>
          <CloseModalButton handleCloseModal={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
              <div>
                <label
                  htmlFor="genre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={formData.author}
                  onChange={handleChange}
                />
                {errors.author && (
                  <p className="mt-1 text-sm text-red-600">{errors.author}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="coverImageUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cover Image URL
                </label>
                <input
                  type="text"
                  name="coverImageUrl"
                  id="coverImageUrl"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={formData.coverImageUrl}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="publishDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Publish Date
                </label>
                <input
                  type="date"
                  name="publishDate"
                  id="publishDate"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={formData.publishDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
        {feedback.message && (
          <div
            className={`text-center py-2 ${
              feedback.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            <p>{feedback.message}</p>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-root") ?? document.body
  );
};

export default BookFormModal;
