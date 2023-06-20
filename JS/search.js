// Get references to the search form, input, and results container
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-news');
const searchForm2 = document.getElementById('search-form2');
const searchInput2 = document.getElementById('search-news2');
const searchResults = document.getElementById('search-result');
const searchResults2 = document.getElementById('search-result2')

// Add event listener to the form submission
searchForm2.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let searchResultss = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < searchResultss.length; i++) {
        const result = searchResultss[i].children[0];
        //console.log(result)
        let headlinesSearchedId = result.dataset.headlineid
        //console.log(headlineClickedID)
        let mainHeadlines = document.getElementById(headlinesSearchedId)
        mainHeadlines.classList.remove('bg-warning', 'bg-opacity-50')
        //console.log(mainHeadlines)
        mainHeadlines.classList.add('bg-warning', 'bg-opacity-50')
    }

    searchResults2.innerHTML = ''
    searchResults.innerHTML = ''
});

searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let searchResultss = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < searchResultss.length; i++) {
        const result = searchResultss[i].children[0];
        //console.log(result)
        let headlinesSearchedId = result.dataset.headlineid
        //console.log(headlineClickedID)
        let mainHeadlines = document.getElementById(headlinesSearchedId)
        mainHeadlines.classList.remove('bg-warning', 'bg-opacity-50')
        //console.log(mainHeadlines)
        mainHeadlines.classList.add('bg-warning', 'bg-opacity-50')
    }

    searchResults2.innerHTML = ''
    searchResults.innerHTML = ''
});



//add listener to input values
//to check for changes and update the search result
searchInput2.addEventListener('input', function () {
    let searchResultss = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < searchResultss.length; i++) {
        const result = searchResultss[i].children[0];
        //console.log(result)
        let headlinesSearchedId = result.dataset.headlineid
        //console.log(headlineClickedID)
        let mainHeadlines = document.getElementById(headlinesSearchedId)
        mainHeadlines.classList.remove('bg-warning', 'bg-opacity-50')
    }

    if (searchInput2.value === "") {
        searchResults2.innerHTML = ''
        searchResults.innerHTML = ''
    } else {
        performSearch(searchInput2.value.toLowerCase().trim())
    }
})
searchInput2.addEventListener('propertychange', function () {
    if (searchInput2.value === "") {
        searchResults2.innerHTML = ''
        searchResults.innerHTML = ''
    } else {
        performSearch(searchInput2.valuetoLowerCase().trim())
    }
})

//input 2
searchInput.addEventListener('input', function () {
    let searchResultss = document.querySelectorAll('.list-group-item')
    for (let i = 0; i < searchResultss.length; i++) {
        const result = searchResultss[i].children[0];
        //console.log(result)
        let headlinesSearchedId = result.dataset.headlineid
        //console.log(headlineClickedID)
        let mainHeadlines = document.getElementById(headlinesSearchedId)
        mainHeadlines.classList.remove('bg-warning', 'bg-opacity-50')
    }

    if (searchInput.value === "") {
        searchResults.innerHTML = ''
        searchResults2.innerHTML = ''
    } else {
        performSearch(searchInput.value.toLowerCase().trim())
    }
})
searchInput.addEventListener('propertychange', function () {
    if (searchInput.value === "") {
        searchResults.innerHTML = ''
        searchResults2.innerHTML = ''
    } else {
        performSearch(searchInput.valuetoLowerCase().trim())
    }
})




// Function to perform the search
function performSearch(input) {
    const headlines = document.querySelectorAll('.headlines') // Get all headlines
    searchResults2.innerHTML = ''
    searchResults.innerHTML = ''
    //console.log(input)

    for (let i = 0; i < headlines.length; i++) {
        const headline = headlines[i];
        //console.log(headline)
        const textContent = headline.textContent.toLowerCase() || headline.innerText.toLowerCase() || ""; // Get the text content of the headline
        //console.log(textContent)

        if (textContent.includes(input)) {
            //console.log(textContent)
            //console.log(headline)

            //get the id of the headlines (used for opening the offcanvas)
            let headlineID = headline.getAttribute('id')
            //console.log(headlineID)

            const p = document.createElement('li');
            //adding class and dataset property for the offcanvas opening property
            p.classList.add('list-group-item', 'bg-light', 'border-primary', 'p-0')

            p.innerHTML = `
                <span data-headlineid="${headlineID}" class="py-2 px-3 d-block" onclick="goToNewsFunction(event)">${textContent}</span>
            `
            searchResults2.appendChild(p)
        }
        if (textContent.includes(input)) {
            let headlineID = headline.getAttribute('id')
            const p = document.createElement('li');
            p.classList.add('list-group-item', 'bg-light', 'border-primary', 'p-0')

            p.innerHTML = `
                <span data-headlineid="${headlineID}" class="py-2 px-3 d-block" onclick="goToNewsFunction(event)">${textContent}</span>
            `
            searchResults.appendChild(p)
        }
    }
}

//function to open news when a search result is clicked is in the news.js file (the goToNewsFunction)