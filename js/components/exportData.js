export function exportData(renderData) {
	const resultsContainer = document.querySelector(".container");

	resultsContainer.innerHTML = "";

	renderData.forEach(function (book) {
		resultsContainer.innerHTML += `
                        <div class="book">
                            <h3>Title: ${book.title}</h3>
                            <p>Register: ${book.isbn}</p>
                            <button>Remove</button>
                        </div>`;
	});
}
