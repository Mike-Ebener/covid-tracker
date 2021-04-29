var getInfo = function(country) {
    var newsUrl = "http://api.mediastack.com/v1/news?access_key=be3c3658dbb343423bac4e9c46b209e9";
    fetch(newsUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function (newsData) {
                console.log(newsData)
            })
        }
    })
};

getInfo();