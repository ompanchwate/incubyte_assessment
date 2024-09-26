import { Library } from '../src/models/library';
import { Book } from '../src/models/book';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it('should add books to the library', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    expect(library.getAvailableBooks().length).toBe(1); // This should fail since no code exists yet
  });
});
