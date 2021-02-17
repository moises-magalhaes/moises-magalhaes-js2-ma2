import { books } from "../data/data.js";

let importedBooks = books;
/*// when I use this line nothing happens

let books = [
	{
		isbn: "1600506460320",
		title: "Great book",
	},
	{
		isbn: "1600506460373",
		title: "Ok book",
	},
	{
		isbn: "1600506460521",
		title: "Bad book",
	},
	{
		isbn: "1600506460456",
		title: "Terrible book",
	},
]; */

// WHEN I IMPORT BOOKS FROM OTHER DOCUMENT IT SHOWS "BOOKS" IS READ-ONLY
console.log(importedBooks);

function removeBook(removeItem) {
	const filteredBooks = importedBooks.filter(
		(book) => book.title !== removeItem
	);

	/*	const filteredBooks = books.filter(filterBooks);

	function filterBooks(book) {
		if (book.title !== removeItem) {
			return true;
		}*/

	importedBooks = filteredBooks;
}

removeBook(2);
console.log(importedBooks);
