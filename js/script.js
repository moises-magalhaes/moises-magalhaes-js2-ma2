import { books } from "./data/books.js";

let importedBooks = books;
console.log(importedBooks);

function exportData() {
	const resultsContainer = document.querySelector(".container");

	resultsContainer.innerHTML = "";

	importedBooks.forEach(function (book) {
		resultsContainer.innerHTML += `
							<li class="book">
								<span>
									<h3>Title: ${book.title}</h3>
									<p>Register: ${book.isbn}</p>
								</span>
									<i class="fa fa-trash" onClick='removeFromList("${book.title}")' data-item="${book.title}"></i>

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
function handleClick(event) {
	event.target.classList.toggle("complete");
}

function removeFromList(event) {
	const deleteThisBook = event.target.dataset.item;

	const newList = importedBooks.filter(function (item) {
		if (deleteThisBook !== item.title) {
			return true;
		}
	});

	console.log(newList);

	importedBooks = newList;
	exportData();
}

async function makeArrayCall() {
	try {
		exportData(importedBooks);

		removeFromList(importedBooks);
	} catch (error) {
		console.log(error);
		// displayError("error", error, ".container");
	}
}

makeArrayCall();
