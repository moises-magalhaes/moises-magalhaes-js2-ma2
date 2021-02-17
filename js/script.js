//import { books } from "./data/data.js";

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
];

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
