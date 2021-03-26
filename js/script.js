import books from "./data/books.js";
import { createMessage } from "./components/messageDisplay.js";

createBooks(books);

function createBooks(bookArray) {
	const bookContainer = document.querySelector("ul");

	bookContainer.innerHTML = "";

	if(bookArray.length === 0) {
		return (bookContainer.innerHTML = `<p> No books in this section
								</p>`);
	}

	bookArray.forEach(function (book) {

		console.log(book.title);
		bookContainer.innerHTML += `
							<li data-isbn="${book.isbn}" class="book">

								<span>
									<h3>Title: ${book.title}</h3>
									<p>Register: ${book.isbn}</p>
								</span>
									<i class="fa fa-trash" data-item="${book.title}"></i>

							</li>`;
	});


const deleteButtons = document.querySelectorAll("li i");


deleteButtons.forEach(function (button){
	button.addEventListener("click", (event) => removeBook(event, bookArray));
})


}

function removeBook(event, bookArray) {

	const parentElement = event.target.parentElement;
	const isbn = parentElement.dataset.isbn;

	console.log(parentElement)

	console.log(bookArray);

	const newArray = bookArray.filter(function(book){
		if(book.isbn !== isbn) {
			return true;
		}

	}); 
	createBooks(newArray);
}


// let importedBooks = books;
// console.log(importedBooks);
// const resultsContainer = document.querySelector(".container");
// const len = importedBooks.length;

// function exportData() {
// 	resultsContainer.innerHTML = "";

// 	importedBooks.forEach(function (book) {
// 		resultsContainer.innerHTML += `
// 							<li class="book">
// 								<span>
// 									<h3>Title: ${book.title}</h3>
// 									<p>Register: ${book.isbn}</p>
// 								</span>
// 									<i class="fa fa-trash" onClick='removeFromList("${book.title}")' data-item="${book.title}"></i>

// 							</li>`;
// 	});

// 	const items = document.querySelectorAll("li");
// 	items.forEach(function (item) {
// 		item.addEventListener("click", handleClick);
// 	});

// 	const removeIcon = document.querySelectorAll("li i");

// 	removeIcon.forEach(function (book) {
// 		book.addEventListener("click", removeFromList);
// 	});
// }

// function handleClick(event) {
// 	event.target.classList.toggle("complete");
// }

// function removeFromList(event) {
// 	console.log(event);
// 	const deleteThisBook = event.target.dataset.item;

// 	const newBookList = importedBooks.filter(function (book) {
// 		if (deleteThisBook !== book.title) {
// 			return true;
// 		}
// 	});

// 	console.log(newBookList);

// 	importedBooks = newBookList;

// 	console.log(importedBooks);
// 	exportData();
// }

// async function makeArrayCall() {
// 	try {
// 		exportData(importedBooks);
// 		removeFromList(importedBooks);
// 		console.log(len);

// 		if (len == []) {
// 			const emptyMessage = createMessage(
// 				"message",
// 				"Sorry! this field is empty"
// 			);
// 			resultsContainer.innerHTML = emptyMessage;
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		/*const errorMessage = createMessage("error", "Sorry! an error has occurred");

// 		element.innerHTML = errorMessage;*/
// 	}

// 	/*if (len == []) {
// 		const emptyMessage = createMessage("error", "Sorry! this field is empty");
// 		resultsContainer.innerHTML = emptyMessage;
// 	}*/
// }

// makeArrayCall()*/
