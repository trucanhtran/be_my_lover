$(function(){
  $("#id_choose_no").on({
      mouseover:function(){
          $(this).css({
              left:(Math.random()*90)+"%",
              top:(Math.random()*90)+"%",
          });
      }
  });

});
