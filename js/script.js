import { books } from "./data/data.js";
import { exportData } from "./components/exportData.js";

async function makeApiCall() {
	try {
		exportData(books);
		/*for (let i = 0; i < books.length; i++) {
			console.log(books[i].isbn);
		}*/
	} catch (error) {
		console.log(error);
		displayError("error", error, ".results");
	}
}

makeApiCall();
