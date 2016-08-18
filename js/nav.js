$( document ).ready(function(){
  $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
    console.log("hamburger clicked");
    $( "#wj_nav" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( "#wj_nav" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

});
