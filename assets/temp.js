
$(document).ready(function () {
    $(".menu").hover(function () {
            $(".alt").css({"transform": "translateY(0em)"});
            $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
            $(".menu").css({"height": "1em"})

        }, function () {
        if (!x) {
            $(".alt").css("transform", "translateY(0em)");
        }
        else {
            $(".alt").css("transform", "translateY(-12em)");
        }
            $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
            $(".menu").css({"height": "5em"})
            
    });
    
    $(".alt").hover(function () {
            $(".alt").css({"transform": "translateY(0em)"});
            $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
            $(".menu").css({"height": "1em"})
        }, function () {
        if (!x) {
            $(".alt").css("transform", "translateY(0em)");
        }
        else {
            $(".alt").css("transform", "translateY(-12em)");

        }
            $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
            $(".menu").css({"height": "5em"})
    });
    

  
});
  
  



$(document).ready(function () {
    // width <600
    if (!x) {
      $(".menu").hover(function () {
        
        $(".alt").css({"transform": "translateY(0em)"});
        $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
        $(".menu").css({"height": "1em"})
  
      }, function () {
        $(".alt").css("transform", "translateY(0em)");
        $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
        $(".menu").css({"height": "5em"})
      });
  
  
      $(".alt").hover(function () {
        
          $(".alt").css({"transform": "translateY(0em)"});
          $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
          $(".menu").css({"height": "1em"})
        
  
      }, function () {
        $(".alt").css("transform", "translateY(0em)");
        $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
        $(".menu").css({"height": "5em"})
      });
    }
    
    // width >= 600
    else {
      $(".menu").hover(function () {
        
        $(".alt").css({"transform": "translateY(0em)"});
        $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
        $(".menu").css({"height": "1em"})
  
      }, function () {
        $(".alt").css("transform", "translateY(-12em)");
        $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
        $(".menu").css({"height": "5em"})
      });
  
  
      $(".alt").hover(function () {
        
          $(".alt").css({"transform": "translateY(0em)"});
          $(".menu-button").css({"box-shadow": "0px 0px 0px darkgray"});
          $(".menu").css({"height": "1em"})
        
  
      }, function () {
        $(".alt").css("transform", "translateY(-12em)");
        $(".menu-button").css({"box-shadow": "0px 0px 8px darkgray"});
        $(".menu").css({"height": "5em"})
      });
    }
  
  });
  
  