function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getWrapperParams() {
	if(bodyWidth <= 767) {
		$(".wrapper").css({
			"padding-top" : $("#header").height() + "px"
		});
	} else {
		$(".wrapper").css({
			"padding-top" : 0
		});
	}
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
	getWrapperParams();
	getAnimation();
});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {
	getWrapperParams();
	getAnimation();

  // ----------
  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  $("#resp_nav .close_btn").on("click", function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
      $(".respmenubtn").removeClass("active");
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 767) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
  });

});