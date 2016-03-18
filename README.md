# randQuoteMachine
This is a small random famous quote generator. It uses the [Andruxnet random famous quote API](https://market.mashape.com/andruxnet/random-famous-quotes) from Mashape.

## Instructions

To make the thing work put your key in js/script.js as shown below:

```javascript
...
// This function fetches a new random quote from the specified api and
// updates the page
function updateQuote() {
  $.ajax({
    headers: {
      'X-Mashape-Key': 'yourKEY',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
...
```
