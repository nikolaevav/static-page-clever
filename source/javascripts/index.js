jQuery(document).ready(function(){
  $('#myCarousel').carousel({ interval: 5000 })
  $('#feedbackCarousel').carousel({ interval: 10000 })

  $.mask.definitions['~'] = "[+-]";
  $(".iphone").mask("8 (999) 999-99-99");

  $.validate();
});