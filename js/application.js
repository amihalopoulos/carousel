$(document).ready(function() {
  var images = $('#images').children('li')

  $('#nxt').click(function() {
    slide(images, "next");
  });

  $('#prev').click(function() {
    slide(images, "previous");
  });

})

