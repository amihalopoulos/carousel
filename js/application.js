$(document).ready(function() {
  var images = $('#images').children('li')
  var dots = $('#dots').children('li')
  dots.eq(0).css('opacity', '1')
  setInterval(function(){ slide(images, "next") }, 5000);

  $('#nxt').click(function() {
    slide(images, "next");
  });

  $('#prev').click(function() {
    slide(images, "previous");
  });

})

