var select = document.getElementById('select');

const news1 = document.getElementById('news1');
const news2 = document.getElementById('news2');
const news3 = document.getElementById('news3');
const news4 = document.getElementById('news4');

const newstitle1 = document.getElementById('newstitle1');
const newstitle2 = document.getElementById('newstitle2');
const newstitle3 = document.getElementById('newstitle3');
const newstitle4 = document.getElementById('newstitle4');

const newstext1 = document.getElementById('newstext1');
const newstext2 = document.getElementById('newstext2');
const newstext3 = document.getElementById('newstext3');
const newstext4 = document.getElementById('newstext4');

var newsArray = [news1, news2, news3, news4];

var newsTitleArray = [newstitle1, newstitle2, newstitle3, newstitle4];

var newsTextArray = [newstext1, newstext2, newstext3, newstext4];

const newsApiKey = "be3c3658dbb343423bac4e9c46b209e9";

var getNews = function (event) {
    var newsUrl = "http://api.mediastack.com/v1/news" +
        "?access_key=" + newsApiKey +
        "&countries=" + select.value +
        "&limit=4";
fetch(newsUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (newsData) {
            console.log(newsData);

            for (let i = 0; i < newsData.data.length; i++) {
                newsArray[i].innerText = "";
                var newsContentHolder = document.createElement('a');
                newsContentHolder.setAttribute("src", newsData.data[i].url)
                var flag = document.createElement('img');
                flag.setAttribute("src", "https://www.countryflags.io/" + select.value + "/flat/64.png");
                newsContentHolder.appendChild(flag);
                newsTitleArray[i].textContent = newsData.data[i].title
                newsContentHolder.appendChild(newsTitleArray[i]);
                newsTextArray[i].textContent = newsData.data[i].source
                newsContentHolder.appendChild(newsTextArray[i]);
                newsArray[i].appendChild(newsContentHolder);
                // add classes to newly created html elements
                // make link work
            }
        })
    } else {
        // TODO show error on the webpage instead of a alert?
        alert("Failed to get news!");
    }
});
 
}

// Covid API starter

/** confirmed cases function - working */
function getConfirmed(country) {
    makeApiRequest('https://api.covid19api.com/live/country/' + country + '/status/confirmed', (response) => {
        var sumOfConfirmed = 0;

        for(var i = 0; i < response.length; i++) {

            sumOfConfirmed += response[i].Confirmed;
        }
        $("#confirmed-number").text(sumOfConfirmed.toLocaleString());
    });
}

/** confirmed deaths function - working */
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

// document.addEventListener('input', getNews);

});
