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

// Covid API starter

//confirmed cases function

function getConfirmed (country) {
    const covidUrl = 'https://api.covid19api.com/live/country/' + country + '/status/confirmed';
    console.log(covidUrl);
fetch(covidUrl).then(function(confirmedCases) {
    if (confirmedCases) {
        // response.josn().then(function(Confirmed) {
        confirmedCases.json().then(function(country){
            console.log(country);

            
                
                for(let i = 0; i < country.length; i++ ){
                    let sum;
                    sum += country[i].Confirmed;
                   // check if variable is a string
                    if(country[0].Province === ''){
                        $('#stat-to-do').html('<li >' + country[0].Confirmed +'</li>');
                    } else {
                        $('#stat-to-do').html('<li>' +  +'</li>');
                    }
                    
                }
           
              
            

            })

          
          
    // });
}
})
};


// confirmed deaths function

function getDeaths (country) {
    const covidUrl = 'https://api.covid19api.com/live/country/' + country + '/status/confirmed';
fetch(covidUrl).then(function(confirmedDeaths) {
    if (response.ok) {
        response.josn().then(function(Deaths) {
         console.log(Deaths);
    });
}
});
};


// confirmed recovered function

function getRecovered (country) {
    const covidUrl = 'https://api.covid19api.com/live/country/' + country + '/status/confirmed';
fetch(covidUrl).then(function(confirmedRecovered) {
    if (response.ok) {
        response.josn().then(function(Recovered) {
         console.log(Recovered);
    });
}
});
};


$(document).ready(function () {
    // Initializes select elements via Materialize.
    $('select').formSelect();
    // TOOD: Provide different default country?
    getInfo('US');


    $('#select-country').on('change', function(country){
        // console.log(country.target.value);
        getConfirmed(country.target.value)

    });
});
