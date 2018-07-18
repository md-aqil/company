
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





(function($) {
 
  var SliceSlider = {
    
    /**
     * Settings Object
     */
    settings: {
      delta:              0,
      currentSlideIndex:  0,
      scrollThreshold:    40,
      slides:             $('.slide'),
      numSlides:          $('.slide').length,
      navPrev:            $('.js-prev'),
      navNext:            $('.js-next'),
    },
    
    /**
     * Init
     */
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    
    /**
     * Bind our click, scroll, key events
     */
    bindEvents: function(){
      
      // Scrollwheel & trackpad
      s.slides.on({
        'DOMMouseScroll mousewheel' : SliceSlider.handleScroll
      });
      // On click prev
      s.navPrev.on({
        'click' : SliceSlider.prevSlide
      });
      // On click next
      s.navNext.on({
        'click' : SliceSlider.nextSlide
      });
      // On Arrow keys
      $(document).keyup(function(e) {
        // Left or back arrows
        if ((e.which === 37) ||  (e.which === 38)){
          SliceSlider.prevSlide();
        }
        // Down or right
        if ((e.which === 39) ||  (e.which === 40)) {
          SliceSlider.nextSlide();
        }
      });
    },
    
    /** 
     * Interept scroll direction
     */
    handleScroll: function(e){

      // Scrolling up
      if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 

        s.delta--;
     
        if ( Math.abs(s.delta) >= s.scrollThreshold) {
          SliceSlider.prevSlide();
        }
      }
 
      // Scrolling Down
      else {
 
        s.delta++;
 
        if (s.delta >= s.scrollThreshold) {
          SliceSlider.nextSlide();
        }
      }
 
      // Prevent page from scrolling
      return false;
    },

    /**
     * Show Slide
     */
    showSlide: function(){ 
      // reset
      s.delta = 0;
      // Bail if we're already sliding
      if ($('body').hasClass('is-sliding')){
        return;
      }
      // Loop through our slides
      s.slides.each(function(i, slide) {

        // Toggle the is-active class to show slide
        $(slide).toggleClass('is-active', (i === s.currentSlideIndex));                
        
        // Add and remove is-sliding class
        $('body').addClass('is-sliding');

        setTimeout(function(){
            $('body').removeClass('is-sliding');
        }, 1000);
      });
    },

    /**
     * Previous Slide
     */
    prevSlide: function(){
      
      // If on first slide, loop to last
      if (s.currentSlideIndex <= 0) {
        s.currentSlideIndex = s.numSlides;
      }
      s.currentSlideIndex--;
      
      SliceSlider.showSlide();
    },

    /**
     * Next Slide
     */
    nextSlide: function(){
      
      s.currentSlideIndex++;
   
      // If on last slide, loop to first
      if (s.currentSlideIndex >= s.numSlides) { 
        s.currentSlideIndex = 0;
      }
 
      SliceSlider.showSlide();
    },
  };
  SliceSlider.init();
})(jQuery);




  new WOW().init();


  if ($(window).width() > 479) {
      $(".box").inertiaScroll({
         parent: $("#content")
       });

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

    $(document).ready(function() {
  var animation = false,
      animDur = 1000,
      $row = $('.box__row'),
      $cell = $('.box__row-cell'),
      $content = $('.box__content'),
      $closeBtn = $('.box__close');

  var animFalse = function() {
    animation = false;
  }

  var active = function() {
    if (animation) return;
    var cellData = $cell.data('cell');
    var $content = $('.box__content[data-content=' + cellData + ']');
    animation = true;

    $cell.addClass('cell-fade');
    $cell.addClass('active');
    $('body').addClass('body-active');
    $content.addClass('show-content');
    $closeBtn.addClass('box-close-active');

    setTimeout(animFalse, animDur);
  }

  var close = function() {
    animation = true;
    
    $cell.removeClass('active cell-fade');
    $content.removeClass('show-content');
    $(this).removeClass('box-close-active');
 $('body').removeClass('body-active');
    setTimeout(animFalse, animDur);
  }

  $row.on('click', '.box__row-cell,.slide__title', active);
  $closeBtn.on('click', close);
  $cell.on({
    mouseenter: function() {
      $cell.addClass('hover-cell');
      $(this).removeClass('hover-cell');
    },
    mouseleave: function() {
      $cell.removeClass('hover-cell');
    }
  });
});