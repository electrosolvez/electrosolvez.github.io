// search.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value;
    alert(`You searched for: ${searchTerm}`);
});
