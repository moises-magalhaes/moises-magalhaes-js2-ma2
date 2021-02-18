export function exportData(renderData) {
	const resultsContainer = document.querySelector(".container");

	resultsContainer.innerHTML = "";

	renderData.forEach(function (book) {
		resultsContainer.innerHTML += `
                        <li class="book">
                            <span>
                                <h3>Title: ${book.title}</h3>
                                <p>Register: ${book.isbn}</p>
                                <button class="fa fa-trash"></button>
                            </span>
                        </li>`;
	});
}
