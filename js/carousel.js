  var slide = function(imageArray, dir) {
    if (dir === "next"){
      slideRight(imageArray)
    } else if (dir === "previous") {
      slideLeft(imageArray)
    }
  }

  var slideRight = function(imageArray){
    for (var i = 0; i < imageArray.length; i++) {
      if ($(imageArray[i]).attr('class') !== "hidden"){
        if (i == imageArray.length -1) {
          var $selected = $(imageArray[0])
        } else {
        var $selected = $(imageArray[i]).next()
        }
        toggleImages($(imageArray[i]), $selected)
        specifyDot(i, $( "li" ).index( $selected ))
        break;
      }
    }
  };

  var slideLeft = function(imageArray) {
    for (var i = 0; i < imageArray.length; i++) {
      if ($(imageArray[i]).attr('class') !== "hidden"){
        if (i == 0) {
          var $selected = $(imageArray[imageArray.length-1])
        } else {
          var $selected = $(imageArray[i]).prev()
        }
        toggleImages($(imageArray[i]), $selected)
        specifyDot(i, $( "li" ).index( $selected ))
        break;
      }
    }
  };

  var toggleImages = function(oldImage, newImage) {
    oldImage.fadeOut(800)
    newImage.fadeIn(800)
    $(oldImage).toggleClass('selected hidden')
    newImage.toggleClass('hidden selected')
  }

  var specifyDot = function(prev, next) {
    var dots = $('#dots').children('li')
    $("#dots li").eq(prev).css('opacity', '.3')
    $("#dots li").eq(next).css('opacity', '1')
  }


// To show a small preview picture in the prev & next divs :

// 1. use prev() and next() to grab those.
// 2. Try to duplicate them?
// 3. stick premade classes on them