$(function(){
  var $swithTable = $('.table-swith');
  var swithTableHTML = $swithTable.html();
  function switchTableTrigger(){
    if(window.matchMedia('(max-width:768px)').matches){
      var tbody = document.createElement('tbody');
      $swithTable.find('tbody tr').each(function(i,v){
        var thead = $('<tr><th class="td-as-th" colspan="2">'+ $(this).find('th').html() +'</th></tr>');
        $(tbody).append(thead);

        $(this).find('td').each(function(index,value){
          var $tr = $('<tr><td class="td-as-th">'+$swithTable.find('thead th:eq('+ (index+1) +')').html() +'</td><td>'+ $(this).html() +'</td></tr>');
          $(tbody).append($tr);
        });
      });
      $swithTable.html(tbody);
    } else {
      $swithTable.html(swithTableHTML);
    }
  }
  switchTableTrigger();
  window.matchMedia('(max-width:768px)').addListener(switchTableTrigger);
});