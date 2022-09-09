const mediaQuery = window.matchMedia('(min-width: 600px)')
var x = false;

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    x = true;
  }
  else {
    x = false;
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)


$(document).ready(function () {
  $(".alt .nav").hover(function () {
    if (x) {
      $(".alt").css({ "padding-bottom": "6em", "transition": ".3s" });
    }

  }, function () {
    $(".alt").css("padding-bottom", "0em");
  });
});


$(document).ready(function () {
  $(".menu").hover(function () {
          $(".alt").css({"transform": "translateY(0em)"});
          $(".menu").css({"height": "2.5em"})

          if ( $(".menu-button").parents('.dark').length) {
            $(".menu-button").css({"box-shadow": "0px 0px 0px black","background":"black"});
          }
          else {
            $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
          }

      }, function () {
      if (!x) {
          $(".alt").css("transform", "translateY(0em)");
      }
      else {
          $(".alt").css("transform", "translateY(-12em)");
      }
          $(".menu").css({"height": "5em"})
          $(".menu").css({"z-index": "4"})
          if ( $(".menu-button").parents('.dark').length) {
            $(".menu-button").css({"box-shadow": "0px 0px 8px black","background":"var(--bg2)"});
          }
          else {
            $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
          }

          
  });
  
  $(".alt").hover(function () {
          $(".alt").css({"transform": "translateY(0em)"});
          $(".menu").css({"height": "2.5em"})

          if ( $(".menu-button").parents('.dark').length) {
            $(".menu-button").css({"box-shadow": "0px 0px 0px black","background":"black"});
          }
          else {
            $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
          }

      }, function () {
      if (!x) {
          $(".alt").css("transform", "translateY(0em)");
      }
      else {
          $(".alt").css("transform", "translateY(-12em)");

      }
          $(".menu").css({"height": "5em"})
          $(".menu").css({"z-index": "4"})

          if ( $(".menu-button").parents('.dark').length) {
            $(".menu-button").css({"box-shadow": "0px 0px 8px black","background":"var(--bg2)"});
          }
          else {
            $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
          }


  });


});






$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > window.innerHeight) {
    $('#homepage-topbar-alt').css({"height": "fit-content"});
    $('#homepage-topbar-alt').fadeIn(350);
    if (!x) {
      $('.menu-button').css({"display": "none"});
    } 
  } else {
    $('#homepage-topbar-alt').css({"height": "0em"});
    $('#homepage-topbar-alt').fadeOut(350)
  }
});

