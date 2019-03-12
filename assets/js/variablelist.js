$(window).on('load',function(){
  $('.variable-list').masonry({
    itemSelector: 'li',
    isResizable:true,
    isFitWidth: true
  });
});