import { bookKey } from "../constants.js";
export function saveBooks(books) {
	localStorage.setItem(bookKey, JSON.stringify(books));
}

export function getBooks() {
	const currentBooks = localStorage.getItem(bookKey);
    
    
    // THIS CAN BE WRITTEN IN ONE LINE
    // if(currentBooks) {
    //     return JSON.parse(currentBooks);
    // }
    // else {
    //     return []
    // }

    return currentBooks ? JSON.parse(currentBooks) : [];

}