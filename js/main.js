$(function(){
  
  var top_btn = $("#page-top");
  
  top_btn.click(function(e){
    e.preventDefault();
    var position = 0;
    $("html,body").animate({scrollTop:position});
  });
});