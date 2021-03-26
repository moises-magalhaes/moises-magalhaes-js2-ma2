//import books from "./data/books.js";
import createBooks from "./components/createBooks.js";
import { createMessage } from "./components/messageDisplay.js";
import { getBooks, saveBooks } from "./helpers/storage.js"


const books = getBooks();

console.log(books);

const input = document.querySelector("input");
const button = document.querySelector("button");

createBooks(books);

button.addEventListener("click", createBook);


function createBook() {
	console.log(input.value);

	if(input.value.trim().length > 0) {
		const newBook = { isbn: Date.now(), title: input.value.trim()};
		books.push(newBook);
		createBooks(books);
		saveBooks(books);
	}
}
