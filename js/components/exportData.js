import { books } from "../data/books.js";

let importedBooks = books;
console.log(importedBooks);

export function exportData() {
	const resultsContainer = document.querySelector(".container");

	resultsContainer.innerHTML = "";

	importedBooks.forEach(function (book) {
		resultsContainer.innerHTML += `
							<li class="book">
								<span>
									<h3>Title: ${book.title}</h3>
									<p>Register: ${book.isbn}</p>
								</span>
									<i class="fa fa-trash" data-item="${book.title}" onClick='removeFromList("${book.title}")'></i>

							</li>`;
	});

	const items = document.querySelectorAll(".book");
	items.forEach(function (item) {
		item.addEventListener("click", handleClick);
	});

	const removeIcon = document.querySelectorAll("li i");

	removeIcon.forEach(function (book) {
		book.addEventListener("click", removeFromList);
	});
}
