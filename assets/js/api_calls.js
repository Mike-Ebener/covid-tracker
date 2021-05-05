
/**
 * A reusable function for making API calls and getting the response.
 * Shows a window alert if an error occurs while making the request.
 * 
 * Use it like this:
 * 
 * ```
 * makeApiRequest("http://somewebsite.com/request.json", (response) => {
 *    console.log("Response: "+ response);
 * });
 * ```
 */
function makeApiRequest(url, success) {
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      //console.log(`Got data from ${url}: ${data}`);
      success(data);
    })
    .catch((error) => {
      alert(`Failed to get data from ${url}: ${error}`);
    });
}
