$(document).ready(function() {

  console.log("Index.js")

  $('.eight').click(function(){
    console.log('clicked')
    $('html, body').animate({
          scrollTop: $('.about').offset().top -50
      }, 1000);
    });

});
