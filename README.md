# Book Management - Bookshelf App

This Bookshelf App is a web application designed for book database administrators and end users. It provides a comprehensive platform for managing book records, including creating, editing, listing, and viewing detailed information about books. Built with Next.js, React, TypeScript, and utilizing CRUD CRUD API service for data storage, this application streamlines the process of book management.

## Key Features

### For Administrators

- **Manage Books**: Add, edit, and delete book records through a user-friendly interface.
- **List Books**: View all book records in a single, organized list.

### For End Users

- **Explore Books**: Browse the complete list of books available in the database.
- **Book Details**: Access detailed information about each book.

## Pages Overview

### Section for Book Database Administrators

- `/admin/books`: List all book records in the database.
- `/admin/books/new`: Form for creating a new book record.
- `/admin/books/[bookId]`: Detail page for an existing book record with the option to edit.

### End User Section

- `/books`: List all book records in the database.
- `/books/[bookId]`: Detail page for viewing information about an existing book.

## Getting Started

### Prerequisites

- Node.js (version 14.0 or later)
- npm (or yarn)

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/samrawitfe/book-shelf.git
cd bookshelf-app

npm install or yarn
npm run dev or yarn dev

This command starts the application on a local development server, usually accessible at http://localhost:3000.

```

## Author

Samrawit Fentaye Abebe
