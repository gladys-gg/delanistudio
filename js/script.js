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


///Adding the hover effect
        $('#work1').hover(function() {
            $(this).animate({opacity:0.3},300);
            $('.portdescription1').show(700);
        },
        function(){
            $(this).animate({opacity:1},300);
            $('.portdescription1').hide(300);
        });

        $('#work2').hover(function() {
          $(this).animate({opacity:0.3},300);
          $('.portdescription2').show(700);
      },
      function(){
          $(this).animate({opacity:1},300);
          $('.portdescription2').hide(300);
      });

      $('#work3').hover(function() {
        $(this).animate({opacity:0.3},300);
        $('.portdescription3').show(700);
    },
    function(){
        $(this).animate({opacity:1},300);
        $('.portdescription3').hide(300);
    });


        $('#work4').hover(function() {
          $(this).animate({opacity:0.3},300);
          $('.portdescription4').show(700);
      },
      function(){
          $(this).animate({opacity:1},300);
          $('.portdescription4').hide(300);
      });


      $('#work5').hover(function() {
        $(this).animate({opacity:0.3},300);
        $('.portdescription5').show(700);
    },
    function(){
        $(this).animate({opacity:1},300);
        $('.portdescription5').hide(300);
    });
    

        $('#work6').hover(function() {
          $(this).animate({opacity:0.3},300);
          $('.portdescription6').show(700);
      },
      function(){
          $(this).animate({opacity:1},300);
          $('.portdescription6').hide(300);
      });


        $('#work7').hover(function() {
          $(this).animate({opacity:0.3},300);
          $('.portdescription7').show(700);
      },
      function(){
          $(this).animate({opacity:1},300);
          $('.portdescription7').hide(300);
      });


      $('#work8').hover(function() {
        $(this).animate({opacity:0.3},300);
        $('.portdescription8').show(700);
    },
    function(){
        $(this).animate({opacity:1},300);
        $('.portdescription8').hide(300);
    });
    });


