$(document).ready(function(){
  const allSteps = document.getElementsByClassName('item-inner');
  const allButtons = document.getElementsByClassName('circle');

  $(document.body).hover(function()
  {
     $(allButtons).each(function(index, element){
       $(this).hover(function(){
        //console.log('#' + 'step' + index);
         $(allSteps[index]).addClass("item-hover");
       },function(){
         $(allSteps[index]).removeClass("item-hover");
       });
    });

    $(allSteps).each(function(index, element){
      $(this).hover(function(){
       //console.log('#' + 'step' + index);
        $(allButtons[index]).addClass("btn-hover");
      },function(){
        $(allButtons[index]).removeClass("btn-hover");
      });
   });

  });

});