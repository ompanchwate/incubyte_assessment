// Library class
import { Book } from './book';

export class Library {
  private books: Map<string, Book> = new Map();

  // Adding new book
  addBook(book: Book): void {
    this.books.set(book.isbn, book);
  }

  // get available books
  getAvailableBooks(): Book[] {
    return Array.from(this.books.values()).filter(book => book.available);
  }
}