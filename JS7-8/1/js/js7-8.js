var $tab1 = $('.tabs').find('.tab1');
var $tab2 = $('.tabs').find('.tab2');
var $tab3 = $('.tabs').find('.tab3');
var $text1 = $('.text1');
var $text2 = $('.text2');



$tab1.on('click', function(){
  $(this).addClass('active');
  $tab2.removeClass('active');
  $tab3.removeClass('active');
  $('.text1').show();
  $('.text2').hide();
  $('.text3').hide();
});

$tab2.on('click', function(){
  $(this).addClass('active');
  $tab1.removeClass('active');
  $tab3.removeClass('active');
  $('.text2').show();
  $('.text1').hide();
  $('.text3').hide();
});

$tab3.on('click', function(){
  $(this).addClass('active');
  $tab1.removeClass('active');
  $tab2.removeClass('active');
  $('.text3').show();
  $('.text2').hide();
  $('.text1').hide();
});