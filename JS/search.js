// Get references to the search form, input, and results container
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Add event listener to the form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the search query from the input field
    const query = searchInput.value.trim();

    performSearch(query)
});

// Function to perform the search
function performSearch(query) {
    // Implement your search logic here
    // This could involve making an API call, searching through data, etc.
    // Return an array of search results
    // Example: return searchResultsArray;
    const elements = document.getElementsByTagName("*"); // Get all elements on the webpage

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const textContent = element.textContent || element.innerText || ""; // Get the text content of the element

        if (textContent.includes(query)) {
            element.classList.add("text-warning-emphasis"); // Add the specified class to the matching element
            //console.log(element)
            console.log(textContent)
        }
    }
}
