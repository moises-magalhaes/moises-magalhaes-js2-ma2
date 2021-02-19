import { books } from "../data/data.js";
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
                                    <button onClick='removeFromList("${book.title}")'><i  class="fa fa-trash" data-item="${book.title}"></i></button>
                                </span>                                
                            </li>`;
	});
	//This part was not present in the document

	const items = document.querySelectorAll("button");
	items.forEach(function (item) {
		item.addEventListener("click", handleClick);
	});
	//The up part was not present

	const removeIcon = document.querySelectorAll("li i");

	removeIcon.forEach(function (eraseThis) {
		eraseThis.addEventListener("click", removeFromList);
	});
}

function handleClick() {
	event.target.classList.toggle("complete");
}

export function removeFromList() {
	console.log(event);
	const deleteThisBook = event.target.dataset.item;
	console.log(deleteThisBook);

	const newList = importedBooks.filter(function (item) {
		if (deleteThisBook !== item) {
			return true;
		}
	});

	console.log(newList);

	importedBooks = newList;
	exportData();
}
