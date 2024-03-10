import { Book } from "../common/type";
import BookCard from "./BookCard";

interface Props {
  books: Book[];
  isAdmin: boolean;
}

const BooksGrid = ({ books, isAdmin }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.length === 0 ? (
        <p>No books found!</p>
      ) : (
        books.map((book) => (
          <BookCard book={book} showAdminControls={isAdmin} />
        ))
      )}
    </div>
  );
};

export default BooksGrid;
