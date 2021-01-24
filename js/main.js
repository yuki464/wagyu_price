$(function(){
  
  var topBtn = $("#page-top");
  
  topBtn.click(function(e){
    e.preventDefault();
    var position = 0;
    $("html,body").animate({scrollTop:position});
  });
});