
$('.navbar-toggle').click(function() {
   $('.navbar-collapse').slideToggle();
})




// if visible 

$.fn.isInViewport = function() {


    var offset = $(this).offset();
    if(!offset) return;
    var elementTop = offset.top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('#carousel-example-generic').isInViewport()) {
        // tl.play();
    } else {
        // tl.restart();
    }
});


  new WOW().init();

  if ($(window).width() > 479) {
      // $(".box").inertiaScroll({
      //    parent: $("#content")
      //  });

      $("#svgContainer").HTMLSVGconnect({
        stroke: "#989898",
        strokeWidth: 1,
        orientation: "auto",



        paths: [
          { start: ".planing", end: ".moc" },


          { start: ".moc", end: ".development-div" },

          { start: ".development-div", end: ".testing" },
          
          { start: ".testing", end: ".ment" }
        ]


      });


  }




  $('.shape-fill-1').wavify({
  height: 10,
  bones: 6,
  amplitude: 50,
 
  speed: .25
});

// expand 



    var myPlugin = {
      name: 'debugger',
      params: {
        debugger: true,
      },

      on: {

        init: function () {
          var grid = $('.swiper-slide.swiper-slide-active .grid').get(0);
          console.log('Item', grid);
          new Grid(grid);
          if (!this.params.debugger) return;
          console.log('init');
        },

        click: function (e) {

         var element =  $(this.clickedSlide).find('.slider-background');
         
      


        },
        
         slideChange: function () {
          var grid = $('.swiper-slide.swiper-slide-active .grid').get(0);
          new Grid(grid);
          if (!this.params.debugger) return;
          console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },

      
      
      },
    };



    Swiper.use(myPlugin);



 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 300,
      speed: 600,
      parallax: true,
       grabCursor: true,
          mousewheel: true,

       loop: false,
        keyboard: {
        enabled: true,
      },

    
       pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },

      debugger: true,

    });
