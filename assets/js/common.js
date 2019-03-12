$(function(){
  $('a[href^=#]').on('click',function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    
    $self = $(this);
    if($self.hasClass('pagetop')){
      $self.addClass('onback');
      setTimeout(function(){
        $self.removeClass('onback');
      },500)
    }
    
    return false;
  });
  
  $('.menu-btn').on('click',function(e){
    e.preventDefault();
    $('.header').toggleClass('open');
    
    on_event();
    setTimeout(off_event,2000);
    
  });
  
  function on_event() {
    document.querySelector('.logo').addEventListener('click', myHandler, false );
  }
  function off_event() {
    document.querySelector('.logo').removeEventListener('click', myHandler, false );
  }
  function myHandler(e){
    e.preventDefault();
  }

  $('.header-menu-cover').on('click',function(){
    $('.menu-btn').click();
  });
  
  var _ua = (function(u){
    return {
      Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)  ||
      u.indexOf("ipad") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
      u.indexOf("kindle") != -1 ||
      u.indexOf("silk") != -1 ||
      u.indexOf("playbook") != -1,
      Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
      u.indexOf("iphone") != -1 ||
      u.indexOf("ipod") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
      u.indexOf("blackberry") != -1
    }
  })(window.navigator.userAgent.toLowerCase());

  if (_ua.Tablet || _ua.Mobile) {
    $('.header-menu').addClass('is-scrollable');
  } else {
    $('.globalnav a,.linkitem a').hover(
      function(){
        $(this).addClass('hover');
      },
      function(){
        $(this).removeClass('hover');
      }
    );
  }
  
  $(window).on('scroll',function(){
    var s = $(window).scrollTop();
    var h = $(window).height() / 2;
    
    if (!_ua.Tablet || !_ua.Mobile) {
      $('.utility-wrapper').css('left', -$(window).scrollLeft());
    }
    
    if(s > h) {
      $('.pagetop').addClass('visible');
    } else {
      $('.pagetop').removeClass('visible');
    }
  });
  
  //$(window).on("scroll", function(){
  //  $(".header").css("left", -$(window).scrollLeft());
  //});
});

$(function() {
  var $readmoreWrapper = $('.read-more-news');
  if (!$readmoreWrapper.length) return;
  $readmoreWrapper.find('button').on('click', function(e) {
    e.preventDefault();
    const $btn = $(this);
    var $itemWrapper = $btn.closest('li');
    var $article = $itemWrapper.children('.article');
    var $btnWrapper = $btn.parent();

    var isOpend = $btnWrapper.hasClass('is-active');
    if (isOpend) {
      $btnWrapper.removeClass('is-active');
      $btn.text('このお知らせをもっと見る');
      $itemWrapper.animate({
        height: window.matchMedia('(max-width: 768px)').matches ? 640 : 640,
      }, 600, function() {
        $itemWrapper.removeClass('is-open').css('height', '');
      });
    } else {
      $btnWrapper.addClass('is-active');
      $btn.text('このお知らせを閉じる');
      var height = $article.outerHeight() + $btnWrapper.outerHeight();
      $itemWrapper.animate({
        height: height,
      }, 600, function() {
        $itemWrapper.addClass('is-open').css('height', '');
      });
    }
  });
});