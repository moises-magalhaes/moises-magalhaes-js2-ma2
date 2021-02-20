export function createMessage(
	type = "empty",
	message = "Sorry, an error has occurred"
) {
	const html = `<div class="message ${type}">${message}</div>`;
	return html;
}
