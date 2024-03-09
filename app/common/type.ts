export type Book = {
  id: string | number;
  title: string;
  author: string;
  description?: string;
  coverImageUrl?: string;
  publishDate?: string;
};

export type AdminControl = {
  edit: boolean;
  delete: boolean;
};
