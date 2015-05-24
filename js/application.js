$(document).ready(function() {
  var images = $('#images').children('li')
  $('#next').click(function() {
    slide(images, "next");
  });

  $('#test').click(function() {
    slide(images, "previous");
  });

  $('#previous').click(function() {
    slide(images, "previous");
  });

})

