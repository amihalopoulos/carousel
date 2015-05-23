$(document).ready(function() {
  var images = $('#images').children('li')
  $('#next').click(function() {
    slide(images, "next");
  });

  $('#previous').click(function() {
    slide(images, "previous");
  });

})

