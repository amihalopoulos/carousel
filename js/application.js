$(document).ready(function() {
  var images = $('#images').children('li')

  setInterval(function(){ slide(images, "next") }, 5000);

  $('#nxt').click(function() {
    slide(images, "next");
  });

  $('#prev').click(function() {
    slide(images, "previous");
  });

})

