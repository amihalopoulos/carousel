$(document).ready(function() {
  var images = $('#images').children('li')
  $('#next').click(function() {
    slide(images, "next");
  });

  $('#prev').click(function() {
    slide(images, "previous");
  });

  $('#previous').click(function() {
    slide(images, "previous");
  });

})

