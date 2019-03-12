$(function(){
  
  var $elm = $('.linkitem-body-wrap');
  
  $(window).on('resize load',function(){
    if(window.matchMedia('(min-width:640px)').matches){
      $elm.tile(3);
    } else {
      $elm.height('auto');
    }
  });
});