const API_URL =
  "https://crudcrud.com/api/178684d1afef4531b2ede94d96842317/books";

export async function fetchBooks() {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 20,
      },
    });
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
