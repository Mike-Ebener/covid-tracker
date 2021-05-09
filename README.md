# Covid-tracker

This application allows the user to select an option from a select menu with 52 different countries. 
When an option is selected, the user is presented with covid statistics - specifically confirmed, deaths, and recovered (Covid19API.com).
They will also be presented with 4 current news articles from said country, filtered by the keyword covid (Mediastack API).
When another country is selected, the data for the previous is cleared and replaced with data for the current country. 
When the page is reloaded, the last country selected will persist via local storage and the info for that country will be displayed on the page.
When a news article is clicked (anywhere within the dynamically created ‘newsContentHolder’ a element), the user will be redirected to the url of that specific article.
This page was styled using Materialize.
Each of the group members' names at the bottom of the page is linked to their respective LinkedIn pages.
IMPORTANT: Access to HTTPS for the Mediastack API requires a paid membership, which we do not have. Because GitHub pages requires HTTPS, our app (specifically the news call) is not functional on GitHub pages. It is functional locally.

Screenshots:
<img width="1088" alt="Screen Shot 2021-05-05 at 7 55 46 PM" src="https://user-images.githubusercontent.com/79947732/117235686-0a2c0700-addc-11eb-8628-871a56c9efab.png">
<img width="530" alt="Screen Shot 2021-05-05 at 7 56 40 PM" src="https://user-images.githubusercontent.com/79947732/117235695-0c8e6100-addc-11eb-9d4c-ade189c978aa.png">

