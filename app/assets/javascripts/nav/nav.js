$(document).ready(function(){
  $("#login").hide();
  $("#signup").hide();
  
  $("#loginbtn").bind( "click", function(){
    setTimeout( function(){
        $('#login').slideDown("slow");
    }, 500);
    $("#signup").fadeOut(500);
  });
  
  $("#signupbtn").bind( "click", function(){
    setTimeout( function(){
        $('#signup').slideDown("slow");
    }, 500);
    $("#login").fadeOut(500);
  });

});