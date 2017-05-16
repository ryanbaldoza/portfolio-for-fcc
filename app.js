$( document ).ready(function() {
        $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("nav").addClass("blue-bg");
        } else {
           $("nav").removeClass("blue-bg");
        }
    });
  
  $(".nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
  
$(".navbar-brand").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $(".nav-link").removeClass("active");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });  
});