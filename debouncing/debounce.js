function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


const searchInput = document.getElementById('search-input');
const debounceMsgEl = document.getElementById("message")
const withoutDebounceMsgEl = document.getElementById("w-message")

function search(query) {
    // Make a search request with the query
    debounceMsgEl.innerText += `\nAPI called with query "${query}"`
}

function withoutDebounceSearch(query) {
    // Make a search request with the query
    withoutDebounceMsgEl.innerText += `\nAPI called with query "${query}"`
}

const debouncedSearch = debounce(search, 500);

searchInput.addEventListener('input', event => {
    const query = event.target.value;
    if (query == '') return

    // Debounce search
    debouncedSearch(query);

    // Without debounce search
    withoutDebounceSearch(query)
});