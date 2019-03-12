$(function(){
  $('.circle-list-date').arctext({radius: 150});
  $('.front-mv').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    easing: 'swing',
    slide:'.front-mv-item',
    appendArrows: $('.front-mv-pager'),
    appendDots: $('.front-mv-nav'),
    fade: true,
    speed: 1000
  });
  $(window).on('load',function(){
    var $imgWrap = $('.circle-list-img'); 
    $imgWrap.each(function(){
      var $this = $(this);
      var $img = $this.find('img');
      var thisW = $this.width();
      var imgW = $img.width();
      
      if(imgW < thisW){
        $img.addClass('full');
      }
      
      $img.css('marginLeft',- (imgW - thisW) / 2);
      
    });
    

    
  });
  
});