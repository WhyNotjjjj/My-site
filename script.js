function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  $(document).ready(function() {
    $('.burger').click(function() {
        $('.burger, header nav').toggleClass('active');
        $('nav a').click(function() {
            $('.burger, header nav').removeClass('active');
        });
    });        
});

$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        speed: 1200,
        mode: 'horizontal',
    });
});
