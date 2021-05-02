const newsApiKey = "be3c3658dbb343423bac4e9c46b209e9";

function getNews(country) {
    const newsUrl = "http://api.mediastack.com/v1/news" +
        "?access_key=" + newsApiKey +
        "&countries=" + country +
        "&limit=5&languages=en,-ar,-zh,-de,-it,-ru,-nl,-es,-fr,-no,-pt";

    makeApiRequest(newsUrl, (response) => {
        console.log(response);
        // clear html elements where news data will appear
        for (let i = 0; i < response.length; i++) {
            // create html elements to be appended
            // add classes to newly created html elements
            // add attributes to newly created html elements ()
        }
    });
}

// Covid API starter

/** confirmed cases function */
function getConfirmed(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/confirmed', (response) => {
        console.log(`Confirmed cases response for ${country}: ${response}`);
    });
}

/** confirmed deaths function */
function getDeaths(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/deaths', (response) => {
        console.log(`Deaths response for ${country}: ${response}`);
    });
};


/** confirmed recovered function */
function getRecovered(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/recovered', (response) => {
        console.log(`Recovered response for ${country}: ${response}`);
    });
};

function onCountryDropdownSelection() {
    const countryCode = $(this).val();
    console.log(`Country selected: ${countryCode}`);
    getNews(countryCode);
}

$(document).ready(function () {
    // Initializes select elements via Materialize.
    let countryDropdown = $("select");
    countryDropdown.formSelect();
    countryDropdown.change(onCountryDropdownSelection);
});
