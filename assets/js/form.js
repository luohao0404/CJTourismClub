$(function(){
  
  var $select = $('select');
  
  $select.on('change',function(){
    if($(this).val() === ''){
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }
  }).on('focus',function(){
    $(this).parent('.select-wrap').addClass('focused');
  }).on('blur',function(){
    $(this).parent('.select-wrap').removeClass('focused');
  });
  
  // add placeholder for ie9
  function addPlaceholder(){
    var thisTitle = $(this).attr('placeholder');
    if(!(thisTitle === '')){
      if ( ('placeholder' in document.createElement('input')) ) {
        return;
      }
      $(this).wrapAll('<span class="placeholderWrapper" style="text-align:left;display:block;position:relative;"></span>');
      $(this).parent('span').append('<span class="placeholder">' + thisTitle + '</span>');
      $('.placeholder').css({
        top: 14,
        left:'23px',
        textAlign:'left',
        color:'#999',
        position:'absolute',
        zIndex:'1',
        paddingRight: 30  
      }).click(function(){
        $(this).parents('dd').find('input,textarea,select').focus();
      });
      
      $(this).focus(function(){
        $(this).parents('dd').find('.placeholder').css({display:'none'});
      });

      $(this).blur(function(){
        var thisVal = $(this).val();
        if(thisVal === ''){
          $(this).parents('dd').find('.placeholder').css({display:'inline-block'});
        } else {
          $(this).parents('dd').find('.placeholder').css({display:'none'});
        }
      });

      var thisVal = $(this).val();
      if(thisVal === ''){
        $(this).parents('dd').find('.placeholder').css({display:'inline-block'});
      } else {
        $(this).parents('dd').find('.placeholder').css({display:'none'});
      }
    }
  }
  $('[placeholder]').each(addPlaceholder);
  
  // check url param
  var param = new Object;
  var pair=location.search.substring(1).split('&');
  for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    param[kv[0]]=kv[1];
  }
  if(param.type){
    $('.type-select').val('地方創生アイデアに関するお問い合わせ').addClass('selected');
    var solType = ''
    switch (param.type){
      case 'tourism':
        solType = '観光振興';
        break;
      case 'establish':
        solType = '創業支援';
        break;
      case 'work':
        solType = '就労・副業支援';
        break;
      case 'idle':
        solType = '遊休資産の活用';
        break;
      case 'source':
        solType = '自主財源の確保';
        break;
      case 'child':
        solType = '少子化対策・子育て支援・教育';
        break;
      case 'pr':
        solType = '地域PR';
        break;
      case 'innovation':
        solType = '農林水産イノベーション';
        break;
      case 'human':
        solType = '地方創生人材の獲得・育成';
        break;
    }
    var $solutionSelect = $('.select-solution');
    $solutionSelect.show();
    $solutionSelect.find('select').val(solType).addClass('selected');
    
    $(window).on('load',function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $('.form');
      var position = target.offset().top - 70;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
    });

  }

  // validate and slideDown fields
  $('.form').validationEngine('attach',{
    promptPosition:'inline',
    validationEventTrigger: 'keyup blur change',
    ajaxFormValidation: false
  });
  
  $('input,select,textarea','.form-dl-wrap').on('jqv.field.result',function(event, field, errorFound){
      if(errorFound){
        field.addClass('is-invalid');
      } else {
        field.removeClass('is-invalid');
        if($(this).hasClass('type-select')){
          if($(this).val() != '地方創生アイデアに関するお問い合わせ'){
            $('.select-solution').stop().slideUp();
            $('.select-solution').find('select').val('');
          } else {
            $('.select-solution').stop().slideDown();
          }
        }
      }
  });
  
  $('.confirm-field').on('change',function(){
    var isChecked = $(this).prop('checked');
    if(isChecked){
      $('#submit-wrap').slideDown();
    } else {
      $('#submit-wrap').slideUp();
    }
  });

  $('.form').on('jqv.form.result',function(event, errorFound){
    if(!$('.submit').hasClass('complete') && !errorFound){
      event.preventDefault();
      $('.submit').addClass('progress');
      if($('.select-solution select').val() === ''){
        $('.select-solution').remove();
      }

      $('.progress-bar').animate({
        width: '50%'
      },10000);

      $('.progress-bar').stop().animate({
        width: '100%'
      },500,function(){
        $('.form-dl-wrap').animate({ height: 'toggle', opacity: 'toggle' }, 1000);
        $('.submit').removeClass('progress').addClass('complete').text('送信完了しました');
        $('#submit-wrap').addClass('disable');
      });
    }
  });
});



























