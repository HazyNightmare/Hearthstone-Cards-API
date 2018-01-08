// NASA API key 5c73nMpMzEJJeLr82fUFYv52h1nZaNc52aBhq7gb

$(function() {
  'use strict';
  var copyright = $(".copyright"),
      date = $(".date"),
      explanation = $(".explanation"),
      title = $(".title"),
      imgSD = $(".imgSD"),
      imgHD = $(".imgHD"),
      manyImgs = $(".manyImgs");


  $.getJSON("https://api.nasa.gov/planetary/", function(json) {
    $(copyright).text(json.copyright);
    $(date).text(json.date);
    $(explanation).text(json.explanation);
    $(title).text(json.title);
    $(imgSD).html("<img src='" + json.url + "' >");
    $(imgHD).html("<img src='" + json.hdurl + "' >");
  });
});
