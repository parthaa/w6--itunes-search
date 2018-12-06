
class ITunesApp {
  constructor() {
    this.searchResultsElement = $("#search-results");
    this.searchButton = $("#search-button");
    this.searchText = $("#search-bar");
    this.results = $("#results");
    this.audio = $("#audio");
    this.audioPlayer = $("#player");
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.searchButton.click(this.search.bind(this));
    this.results.click(this.trackClicked.bind(this))
  }

  trackClicked(event) {
    this.audio.attr("src", event.target.dataset["url"]);
    this.audioPlayer[0].pause();
    this.audioPlayer[0].load();
  }

  searchResults(resultsJson) {
    let results = resultsJson["results"];
    this.results.children().remove();
    for(let i=0; i< results.length; i++) {
      let result = results[i];
      let html= `<li data-url='${result.previewUrl}'> Track:${result.trackName}, Artist:${result.artistName}, Album: ${result.collectionName} </li>`;
      this.results.append(html);
    }
  }

  search() {
    let input = this.searchText.val();
    fetch(`https://itunes-api-proxy.glitch.me/search?media=music&term=${input}`, {
      })
      .then(function(response) {
        return response.json();
      })
      .then(this.searchResults.bind(this));
  }
}

itunesApp = new ITunesApp();

