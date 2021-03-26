//import { books } from "./data/data.js";
console.log(books);

function removeBook(removeIsbn) {
	const filteredBooks = books.filter(filterBooks);

	function filterBooks(book) {
		if (book.isbn !== removeIsbn) {
			return true;
		}
	}

	books = filteredBooks;
}

removeBook("1600506460456");
console.log(books);
