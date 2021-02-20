export function createMessage(
	type = "empty",
	message = "Sorry, an error has occurred"
) {
	const html = `<div class="message ${type}">${message}</div>`;
	return html;
}

/* const element = document.querySelector(".container");
	const message = createMessage("empty", "Sorry! No products in the basket.");

	console.log(element);

	element.innerHTML = message;
*/
