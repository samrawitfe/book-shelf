export type Book = {
  _id: string | number;
  title: string;
  genre: string;
  author: string;
  description?: string;
  coverImageUrl?: string;
  publishDate?: string;
};

export type AdminControl = {
  edit: boolean;
  delete: boolean;
};

export type BookDetailProps = {
  params: {
    bookId: string;
  };
};

export type BookProps = {
  book: Book;
  showAdminControls: boolean;
};
