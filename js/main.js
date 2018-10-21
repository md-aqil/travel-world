	$(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0
  });


			new WOW().init();

			$('a.page').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});


			var scene = document.getElementById('scene');
			var parallax = new Parallax(scene)

			// var scene = document.getElementById('scene2');
			// var parallax = new Parallax(scene2)



$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('affix animated fadeInDown', $(this).scrollTop() > $nav.height());
  });
});


      $('.fbox-2 li').each(function(a) {
        $(this).attr('data-wow-delay', `${(a / 10) * 1.5}s`);
      });
      

      $('.rippleIt').ripples({
        resolution: 256,
        perturbance: 0.03,
        dropRadius: 20,
      });



    var swiper = new Swiper('.swiper-container.hero', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



  var swiper = new Swiper('.swiper-container.tour-list', {
    slidesPerView: 4,
    spaceBetween: 30,
    parallax: true,
    freeMode: true,
      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  }); 
