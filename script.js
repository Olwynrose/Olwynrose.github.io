$(".fgBar").css("width : 0%;");


function changeCurrentYear(year) {
  $(".year").removeClass("current");
  $(".yearInfos").removeClass("current");
  if (year == 1) {
    $("#20182019").addClass("current");
    $("#yearInfos1").addClass("current");
  }
  else if (year == 2) {
    $("#20172018").addClass("current");
    $("#yearInfos2").addClass("current");
  }
  else if (year == 3) {
    $("#20162017").addClass("current");
    $("#yearInfos3").addClass("current");
  }
  else  {
    $("#20152016").addClass("current");
    $("#yearInfos4").addClass("current");
  }
}


skills = $(".fgBar");

function isWholeVisible(element) {
        var
          viewPortHeight = $( window ).height(), // Viewport Height
          scrollTop = $( window ).scrollTop(), // Scroll Top
          currElementPosY = $( element ).offset().top,
          elementHeight = $( element ).height();

        return ( currElementPosY > scrollTop && currElementPosY + elementHeight < ( viewPortHeight + scrollTop )*0.9999 );
}

function skillsAreNotVisible() {
  var result = true;
    $(".fgBar").each(function(index) {
      if (isWholeVisible($(this))) {
        result = false;
      }
    })
    return result;
}


$(window).scroll( function () {
  //skills
  if (skillsAreNotVisible()) {
    skills = $(".fgBar.loaded");
    skills.each(function() {
      $(this).width("0");
      $(this).css("transition", "width 1s");
      $(this).removeClass("loaded");
    });
  }
  else {
    skills = $(".fgBar").not(".loaded");
    skills.each(function() {
      if(isWholeVisible($(this))) {
        size = $(this).attr('class').split(' ').pop();
        //animate
        //$(this).attr("transition", "width " + size/50 + "s");
        $(this).width(size + "%");
        //add loaded class
        $(this).addClass("loaded");
      }
    });
  }

});

function nextPic(n) {
  var max = -999999999;
  var currentZ;
  var obj;
  pictures = $("#travelPic" + n + " .polaroid");
  pictures.each(function() {
    if ($(this).css("z-index") > max) {
      max = $(this).css("z-index");
    }
  });

  max = parseInt(max) + 1;

  pictures.each(function() {


    currentZ = parseInt($(this).css("z-index"));
    currentZ = 1 + currentZ;
    $(this).css("z-index", currentZ);

    if ($(this).css("z-index") == max) {
      obj = $(this);
      obj.css("right", "-25vw");
      setTimeout(function() {
        obj.css("z-index", 0);
        setTimeout(function() {
            obj.css("right", "0");
        }, 20);
      }, 800);



      /*
      $(this).css("animation-duration", "1s");
      $(this).css("animation-timing-function", "cubic-bezier(0.3, 1, 0.8, 1)");
      $(this).css("animation-direction", "alternate");
      $(this).css("animation-iteration-count", "2");
      $(this).css("animation-delay", "0s");
      $(this).css("animation-name", "slide");
      */

    }
  });
}

function changeDestination(d, n) {
  $(".travelInfos").css("visibility", "collapse");
  $("#travelInfo" + d).css("visibility", "visible");

  $(".travelPic").css("visibility", "collapse");
  $("#travelPic" + d).css("visibility", "visible");

  $(".locMarker").removeClass("current");
  $("#" + n).addClass("current");
}
