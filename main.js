
// function search(params) {
//   var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
//   fetch('https://itunes.apple.com/search?${queryString}')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(JSON.stringify(myJson));
//     });
// }

class ITunesApp {
  constructor() {
    this.searchResultsElement = document.getElementById("search-results");
    this.searchButton = document.getElementById("search-button");
    this.searchText = document.getElementById("search-bar");
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.searchButton.addEventListener("click", this.search.bind(this));
  }

  searchResults(resultsJson) {
    console.log(JSON.stringify(resultsJson));
  }
  search() {
    let input = this.searchText.value;
    fetch('https://itunes.apple.com/search?term=${input}')
      .then(function(response) {
        return response.json();
      })
      .then(this.searchResults.bind(this));
  }
}

itunesApp = new ITunesApp();

