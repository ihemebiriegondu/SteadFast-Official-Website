// Get references to the search form, input, and results container
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-news');
const searchForm2 = document.getElementById('search-form2');
const searchInput2 = document.getElementById('search-news2');
const searchResults = document.getElementById('search-results');

// Add event listener to the form submission
searchForm2.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the search query from the input field
    const query = searchInput2.value.trim();

    performSearch(query)
});

// Function to perform the search
function performSearch(query) {
    // Implement your search logic here
    // This could involve making an API call, searching through data, etc.
    // Return an array of search results
    // Example: return searchResultsArray;
    const headlines = document.querySelectorAll('.headlines') // Get all headlines

    for (let i = 0; i < headlines.length; i++) {
        const headline = headlines[i];
        console.log(headline)
        const textContent = headline.textContent || headline.innerText || ""; // Get the text content of the headline
        console.log(textContent)

        if (textContent.includes(query)) {
            headline.classList.add("text-warning-emphasis"); // Add the specified class to the matching headline
            //console.log(headline)
            console.log(textContent)
        }
    }
}
