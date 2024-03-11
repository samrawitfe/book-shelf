import { Book } from "../common/type";

const API_ENDPOINT =
  "https://crudcrud.com/api/e5a15f871b2a42039bc731955be7314c/books";

export async function fetchBooks() {
  try {
    const response = await fetch(API_ENDPOINT, {
      next: {
        revalidate: 10,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const books = await response.json();

    return books;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}

export async function getBook(bookId: number | string) {
  try {
    const response = await fetch(`${API_ENDPOINT}/${bookId}`, {
      //   next: {
      //     revalidate: 1,
      //   },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const books = await response.json();
    return books;
  } catch (error: any) {
    console.log(error.message);
    return {};
  }
}

export async function deleteBook(bookId: number | string) {
  try {
    const response = await fetch(`${API_ENDPOINT}/${bookId}`, {
      method: "DELETE",
    });

    return response;
  } catch (error: any) {
    console.log(error.message);
  }
}

export const saveBook = async (
  formData: Omit<Book, "_id">,
  bookId?: string | number
): Promise<Response> => {
  const response = await fetch(
    bookId ? `${API_ENDPOINT}/${bookId}` : API_ENDPOINT,
    {
      method: bookId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  return response;
};
