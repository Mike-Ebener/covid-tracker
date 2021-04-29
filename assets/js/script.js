// variables for html elements into which the news data will be appended
// variable for option.value to be pushed into get info as 'country'

var newwws = [
    news1,
    news2,
    news3,
    news4,
    news5,
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

<select>
            <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium</option>
            <option value="br">Brazil</option>
            <option value="bg">Bulgaria</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cz">Czech Republic</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="in">India</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="lv">Latvia</option>
            <option value="lt">Lithuania</option>
            <option value="my">Malaysia</option>
            <option value="mx">Mexico</option>
            <option value="ma">Morocco</option>
            <option value="nl">Netherlands</option>
            <option value="nz">New Zealand</option>
            <option value="ng">Nigeria</option>
            <option value="no">Norway</option>
            <option value="ph">Philippines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="sa">Saudi Arabia</option>
            <option value="rs">Serbia</option>
            <option value="sg">Singapore</option>
            <option value="sk">Slovakia</option>
            <option value="si">Slovenia</option>
            <option value="za">South Africa</option>
            <option value="kr">South Korea</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="ua">Ukraine</option>
            <option value="ae">United Arab Emirates</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
            <option value="ve">Venezuela</option>
        </select>

getInfo();