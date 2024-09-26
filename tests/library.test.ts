import { Library } from '../src/models/library';
import { Book } from '../src/models/book';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  // adding new book
  it('should add books to the library', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    expect(library.getAvailableBooks().length).toBe(1);
  });

  // Borrow book
  it('should allow a book to be borrowed if available', () => {
    const book = new Book('1001', 'The Secret', 'Om Panchwate', 2024);
    library.addBook(book);
    library.borrowBook('1001');
    expect(library.getAvailableBooks().length).toBe(0);
  });
  
});
