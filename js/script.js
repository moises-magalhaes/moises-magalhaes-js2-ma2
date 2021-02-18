import { books } from "./data/data.js";
/*import { removeBook } from "./components/removeItems.js";*/
import { handleClick } from "./components/exportData.js";
import { exportData } from "./components/exportData.js";
import { removeFromList } from "./components/exportData.js";

let importedBooks = books;

async function makeApiCall() {
	try {
		exportData(importedBooks);
		handleClick(importedBooks);
		removeFromList(importedBooks);

		/*for (let i = 0; i < books.length; i++) {
			console.log(books[i].isbn);
		}*/
	} catch (error) {
		console.log(error);
		displayError("error", error, ".container");
	}
}

makeApiCall();
