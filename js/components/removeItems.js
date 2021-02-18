import { books } from "../data/data.js";

let importedBooks = books;
// now the read only is gone

console.log(importedBooks);

function removeBook(removeItem) {
	const filteredBooks = importedBooks.filter(
		(book) => book.isbn !== removeItem
	);

	importedBooks = filteredBooks;
}

removeBook("1600506460373");
//now the array is fixed and the product is deleted when console loging,
//but there still are 4 items maybe because the page shows what is in the export
//data functions, not in the remove item functions

console.log(importedBooks);
