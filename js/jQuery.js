$(function(){
  $('.menu-btn').on('click', function(){
    $('.sp-navi').toggleClass('is-active');
  });
  var dir = -1;
  var interval = 3000;
  var duration = 700;
  var timer;
  $(".top_image ul").prepend($(".top_image li:last-child"));
  $(".top_image ul").css("left", -640);
  timer = setInterval(slideTimer, interval);
  function slideTimer(){
    if(dir == -1){
    $(".top_image ul").animate({"left": "-=640px"}, duration,function(){
      $(this).append($(".top_image li:first-child"));
      $(this).css("left", -640);
    });
  }else{
    $(".top_image ul").animate({"left": "+=640px"}, duration,function(){
      $(this).prepend($(".top_image li:last-child"));
      $(this).css("left", -640);
    dir = -1;
    });
  }
}
$("#prevBtn").click(function(){
  dir = 1;
  clearInterval(timer);
  timer = setInterval(slideTimer, interval);

  slideTimer();
});
$("#nextBtn").click(function(){
  dir = -1;
  clearInterval(timer);
  timer = setInterval(slideTimer, interval);
  slideTimer();
});
});