  var slide = function(imageArray, dir) {
    if (dir === "next"){
      for (var i = 0; i < imageArray.length; i++) {
        if ($(imageArray[i]).attr('class') !== "hidden"){
          var selected = i + 1
          if (selected > imageArray.length -1) {
            selected = 0
          }
          // $(imageArray[i]).toggle('slide')
          $(imageArray[i]).toggleClass('selected hidden')
          $(imageArray[selected]).toggleClass('hidden selected')
          break;
        }
      };
    } else if (dir === "previous") {
      for (var i = 0; i < imageArray.length; i++) {
        if ($(imageArray[i]).attr('class') !== "hidden"){
          var selected = i -1
          if (selected === -1) {
            selected = imageArray.length -1
          }
          $(imageArray[i]).toggleClass('selected hidden')
          $(imageArray[selected]).toggleClass('hidden selected')
          break;
        }
      };
    }
  }