/*
* Coded by Giorgi Abuladze
* March, 2016
*/

// Store elements by id in vars not to search the DOM on every action
var generate = $("#gen");
var text = $("#quote");
var author = $("#author");
var tweet = $("#tweet");

var tweetUrl = "";

// This function fetches a new random quote from the specified api and
// updates the page
function updateQuote() {
  $.ajax({
    headers: {
      'X-Mashape-Key': '', // YOUR MASHAPE KEY GOES HERE
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    type: "GET",
    dataType: "json",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    success: function(quoteModel) {
      text.html(quoteModel["quote"]);
      author.html(quoteModel["author"]);
      tweetUrl = "https://twitter.com/intent/tweet?text=\""+quoteModel["quote"]+"\" - "+quoteModel["author"];
      tweet.attr("href", tweetUrl);
    },
    error: function (err) { text.html(err); }
  });
}

$(document).ready(function() {
  updateQuote(); //Update the quote
  generate.on("click", updateQuote);
});
