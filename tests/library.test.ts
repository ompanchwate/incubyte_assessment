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

    // handling unavailable books
    it('should throw an error when borrowing a non-existent or unavailable book', () => {
        const book = new Book('1001', 'The Secret', 'Om Panchwate', 2024);
        library.addBook(book);
        library.borrowBook('1001'); // Now the book is unavailable
        expect(() => library.borrowBook('1001')).toThrow('Book not available');
    });

    // Returning book
    it('should return a borrowed book to the library', () => {
        const book = new Book('1001', 'The Secret', 'Om Panchwate', 2024);
        library.addBook(book);
        library.borrowBook('1001');
        library.returnBook('1001'); // return a book
        expect(library.getAvailableBooks().length).toBe(1);
    });

    // Viewing the book
    it('should view all available books in the library', () => {
        const book1 = new Book('1001', 'The Secret', 'Om Panchwate', 2024);
        const book2 = new Book('1002', 'Life Amazing Secret', 'Gaur Gopal Das', 2022);
        library.addBook(book1);
        library.addBook(book2);
        expect(library.getAvailableBooks().length).toBe(2);
    });
});
