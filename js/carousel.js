  var slide = function(imageArray, dir) {
    if (dir === "next"){
      for (var i = 0; i < imageArray.length; i++) {
        if ($(imageArray[i]).attr('class') !== "hidden"){
          if (i == imageArray.length -1) {
            var $selected = $(imageArray[0])
          } else {
          var $selected = $(imageArray[i]).next()
          }
          $(imageArray[i]).fadeOut(800)
          $selected.fadeIn(800)
          $(imageArray[i]).toggleClass('selected hidden')
          $selected.toggleClass('hidden selected')

          break;
        }
      };
    } else if (dir === "previous") {
      for (var i = 0; i < imageArray.length; i++) {
        if ($(imageArray[i]).attr('class') !== "hidden"){
          if (i == 0) {
            var $selected = $(imageArray[imageArray.length-1])
          } else {
            var $selected = $(imageArray[i]).prev()
          }
          $(imageArray[i]).fadeOut(800)
          $selected.fadeIn(800)
          $(imageArray[i]).toggleClass('selected hidden')
          $selected.toggleClass('hidden selected')
          break;
        }
      };
    }
  }