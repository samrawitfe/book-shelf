import { Book } from "../common/type";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
  isAdmin: boolean;
}

export const BooksList = ({ books, isAdmin = false }: Props) => {
  return (
    <div className="books-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} showAdminControls={isAdmin} />
      ))}
    </div>
  );
};
