import { saveBooks } from "../helpers/storage.js"
export default function createBooks(bookArray) {
	const bookContainer = document.querySelector("ul");

	bookContainer.innerHTML = "";

	if(bookArray.length === 0) {
		return (bookContainer.innerHTML = `<p> No books in this section
								</p>`);
	}

	bookArray.forEach(function (book) {
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

    console.log(event);


	const parentElement = event.target.parentElement;
	const isbn = parentElement.dataset.isbn;

    console.log("isbn", typeof isbn);

	const newArray = bookArray.filter(function(book){
		if(book.isbn != isbn) {
			return true;
		}

	}); 

    console.log("newArray", newArray);
	createBooks(newArray);
    saveBooks(newArray);
}

