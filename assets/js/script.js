const apiKey = "be3c3658dbb343423bac4e9c46b209e9";

function getInfo(country) {
    const newsUrl = "http://api.mediastack.com/v1/news" +
        "?access_key=" + apiKey +
        "&countries=" + country +
        "&limit=5&languages=en,-ar,-zh,-de,-it,-ru,-nl,-es,-fr,-no,-pt";
    fetch(newsUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (newsData) {
                console.log(newsData);
                // clear html elements where news data will appear
                for (let i = 0; i < newsData.length; i++) {
                    // create html elements to be appended
                    // add classes to newly created html elements
                    // add attributes to newly created html elements ()
                }
            })
        } else {
            // TODO show error on the webpage instead of a alert?
            alert("Failed to get news!");
        }
    });
}

$(document).ready(function () {
    // Initializes select elements via Materialize.
    $('select').formSelect();
    // TOOD: Provide different default country?
    getInfo('US');
});
