const newsApiKey = "be3c3658dbb343423bac4e9c46b209e9";

function getNews(country) {
    const newsUrl = "http://api.mediastack.com/v1/" +
        "?access_key=" + newsApiKey +
        "&countries=" + "&keywords= virus,-corona" + country +
        "&limit=5&languages=en,-ar,-zh,-de,-it,-ru,-nl,-es,-fr,-no,-pt";

    makeApiRequest(newsUrl, (response) => {
        console.log(response);
        // clear html elements where news data will appear
        for (let i = 0; i < response.length; i++) {
            // create html elements to be appended
            // add classes to newly created html elements
            // add attributes to newly created html elements ()
            $("#news-text-1").text()
        }
    });
}

// Covid API starter

/** confirmed cases function */
function getConfirmed(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/confirmed', (response) => {
        var sumOfConfirmed = 0;
        for(var i = 0; i < response.length; i++) {
            sumOfConfirmed += response[i].Confirmed;
        }
        $("#confirmed-number").text(sumOfConfirmed.toLocaleString());
    });
}

/** confirmed deaths function */
function getDeaths(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/deaths', (response) => {
        var sumOfDeaths = 0;
        for(var i = 0; i < response.length; i++) {
            sumOfDeaths += response[i].Deaths;
        }
        $("#dead-number").text(sumOfDeaths.toLocaleString());
    });
};


/** confirmed recovered function */
function getRecovered(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/recovered', (response) => {
        var sumOfRecovered = 0;
        for(var i = 0; i < response.length; i++) {
            sumOfRecovered += response[i].Recovered;
        }
        $("#recovered-number").text(sumOfRecovered.toLocaleString());
    });
};

function onCountryDropdownSelection() {
    const countryCode = $(this).val();
    console.log(`Country selected: ${countryCode}`);
    getNews(countryCode);
    getConfirmed(countryCode);
    getDeaths(countryCode);
    getRecovered(countryCode);
}

$(document).ready(function () {
    // Initializes select elements via Materialize.
    let countryDropdown = $("select");
    countryDropdown.formSelect();
    countryDropdown.change(onCountryDropdownSelection);
});
