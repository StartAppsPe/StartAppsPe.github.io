(function() {


  $(window).load(function(){
    	parallax();
  })
  $(window).scroll(function(e){
    	parallax();
  });
  function parallax(){
    if ($(document).width() < 900) {
      $('.ulimascreencontainer').css('top',120+'px');
      $('.aprilsscreencontainer').css('top',120+'px');
      $('.pichangueascreencontainer').css('top',120+'px');
    } else {
      var scrolled = $(window).scrollTop();
      $('.ulimascreencontainer').css('top',-(scrolled*0.5)+'px');
      $('.aprilsscreencontainer').css('top',-(scrolled*0.5)+200+'px');
      $('.pichangueascreencontainer').css('top',-(scrolled*0.5)+450+'px');
    }
  }
})();