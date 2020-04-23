function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

$(window).load(function() {



});

$(window).resize(function() {

  getAnimation();

});

$(document).scroll(function() {

  getAnimation();

});

$(document).ready(function() {

  getAnimation();

});