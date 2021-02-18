import { books } from "../data/data.js";
let importedBooks = books;

export function exportData(renderData) {
	const resultsContainer = document.querySelector(".container");

	resultsContainer.innerHTML = "";

	renderData.forEach(function (book) {
		resultsContainer.innerHTML += `
                            <li class="book">
                                <span>
                                    <h3>Title: ${book.title}</h3>
                                    <p>Register: ${book.isbn}</p>
                                    <button><i  class="fa fa-trash" data-item="${book}"></i></button>
                                </span>                                
                            </li>`;
	});

	const removeIcon = document.querySelectorAll("li i");

	removeIcon.forEach(function (eraseThis) {
		eraseThis.addEventListener("click", removeFromList);
	});
}

export function handleClick(e) {
	e.target.classList.toggle("complete");
}

export function removeFromList(e) {
	console.log(e);
	const deleteThisBook = e.target.dataset.book;

	const newList = exportData.filter(function (item) {
		if (deleteThisBook !== item) {
			return true;
		}
	});

	importedBooks = newList;
	exportData();
}
