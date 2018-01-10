$(function() {
  'use strict';
  let cardHolder = $(".cardHolder");
  let imgLocation = "HSCardImgs/";
  let searchInput = $(".searchInput");
  let button = $(".button");

  $(button).click(function() {
    $(cardHolder).children().remove(".card");
    let search = $(searchInput).val();
    if (search !== null && search !== undefined && search !== "") {
      $.getJSON("https://api.hearthstonejson.com/v1/18336/enUS/cards.json", function(json) {
        for (var i = 0; i < json.length; i++) {
          let name = json[i].name;
          if (name.substr(0, search.length) === search) {
            $(cardHolder).append("<img class='card' src='" + imgLocation + json[i].id + ".png' >");
          }
        }
      });
    }
    else {
      $(cardHolder).append("<div><p>There was an error. Try again</p></div>");
    }
  })
});
