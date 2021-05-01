const news1 = document.getElementById('news1');
const news2 = document.getElementById('news2');
const news3 = document.getElementById('news3');
const news4 = document.getElementById('news4');

var newsArray = [news1, news2, news3, news4];

const apiKey = "be3c3658dbb343423bac4e9c46b209e9";

function getInfo(country) {
    const newsUrl = "http://api.mediastack.com/v1/news" +
        "?access_key=" + apiKey +
        "&countries=" + country +
        "&limit=4&languages=en,-ar,-zh,-de,-it,-ru,-nl,-es,-fr,-no,-pt";
    fetch(newsUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (newsData) {
                console.log(newsData);
                
                for (let i = 0; i < newsData.length; i++) {
                    newsArray
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
