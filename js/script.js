//Business logic//
let pdesign = $('#pdesign');
let pdevelop = $('#pdevelop');
let pproduct = $('#pproduct');


$(pdesign).hide();
$(pdevelop).hide();
$(pproduct).hide();




jQuery(document).ready(function() {
  //show paragraph content
      $("#img1").click(function() {
      $( "#pdesign" ).slideUp( "slow");
      $("#img1").hide();
      $("#pdesign").show();
      $("#design").animate({fontWeight:'500',fontSize:'25px'});


    });

    $("#img2").click(function() {
      $( "#pdevelop" ).slideUp( "slow");
      $("#img2").hide();
      $("#pdevelop").show();
      $("#develop").animate({fontWeight:'500',fontSize:'25px'});


    });


    $("#img3").click(function() {
      $( "#pproduct" ).slideUp( "slow");
      $("#img3").hide();
      $("#pproduct").show();
      $("#product").animate({fontWeight:'500',fontSize:'25px'});


    });


    //hide paragraph content
      $("#design").click(function() {
      $( "#pdesign" ).slideDown();
      $("#img1").show();
      $("#pdesign").hide();
      $("#design").animate({fontWeight:'300',fontSize:'20px'});
      });

      $("#develop").click(function() {
        $( "#pdevelop" ).slideDown();
        $("#img2").show();
        $("#pdevelop").hide();
        $("#develop").animate({fontWeight:'300',fontSize:'20px'});
        });

        
        $("#product").click(function() {
          $( "#pproduct" ).slideDown();
          $("#img3").show();
          $("#pproduct").hide();
          $("#product").animate({fontWeight:'300',fontSize:'20px'});
          });
    

    });