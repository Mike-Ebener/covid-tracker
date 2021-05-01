// variables for html elements into which the news data will be appended
// variable for option.value to be pushed into get info as 'country'

var newwws = [
    news1,
    news2,
    news3,
    news4,
]

var getInfo = function(country) {
    var apiKey = "be3c3658dbb343423bac4e9c46b209e9";
    
    var newsUrl = "http://api.mediastack.com/v1/news?access_key=" + apiKey + "&countries=" + country + "&limit=5&languages=en,-ar,-zh,-de,-it,-ru,-nl,-es,-fr,-no,-pt";
    fetch(newsUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function (newsData) {
                console.log(newsData);
                // clear html elements where news data will appear
                for (let i = 0; i < newsData.length; i++) {
                    // create html elements to be appended
                    // add classes to newly created html elements
                    // add attributes to newly created html elements ()
                }
            })
        }
    })
};

getInfo();