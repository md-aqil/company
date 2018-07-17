
$('.navbar-toggle').click(function() {
   $('.navbar-collapse').slideToggle();
})



var tl = new TimelineMax({ repeat: -1 });
var time = 1;

tl.to(".screen-slider",time,{ y:-100 , ease:  Back.easeOut.config(1.7) })

  .to(".screen-slider",2,{ y:-300 , ease:  Back.easeOut.config(1.7)})
  .to(".screen-slider",time,{ y:-500 , ease:  Back.easeOut.config(1.7)})
  .to(".screen-slider",time,{ y:-900 , ease:  Back.easeOut.config(1.7)});



var tl2 = new TimelineMax({ repeat: -1 });


tl2.to(".screen-slider2",time,{ y:-100 , ease:  Back.easeOut.config(1.7) })

  .to(".screen-slider2",1,{ y:-500 , ease:  Back.easeOut.config(1.7)})
  .to(".screen-slider2",2,{ y:-800 , ease:  Back.easeOut.config(1.7)})
  .to(".screen-slider2",2,{ y:-1500 , ease:  Back.easeOut.config(1.7)})
  .to(".screen-slider2",2,{ y:-2000 , ease:  Back.easeOut.config(1.7)})






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



// front-banner-animation

var bulbline = $('.bulb-line .st19');

var p1 = new TimelineMax({ repeat: -1});


  p1.fromTo(bulbline, 1, {scale: 0}, {scale: 1});
  p1.staggerFrom(bulbline, 1, {scale: 0}, {scale: 1});

  TweenMax.to('#gear, #gear_1_', 5, {rotation:"360", ease:Linear.easeNone, repeat:-1, transformOrigin: 'center'});

  TweenMax.from('#chat-icon', 1.3, {rotation:"50deg",  transformOrigin: 'center', y: 20,  ease: Back.easeOut.config(1.7) });



  var tl = new TimelineLite({onComplete:function(){
      this.restart();
    }
  });

  tl
  .staggerFrom(".msg-dot circle", 1, {y: 10, scaleY: 1.1, autoAlpha:0, delay:1,  repeatDelay:1}, 0.2)

  TweenMax.from('.boxb', 1, { y: 20, yoyo:true, repeat:-1, });

  TweenMax.from('.boxb2', 1, { y: 20, yoyo:true, repeat:-1,delay:1 });


  TweenMax.to('.bbox', 3, { x: 100, yoyo:true, repeat:-1,delay:1 });


  var tlhand = new TimelineMax({repeat:-1});

   tlhand
    .to("#hand",  1.5, {rotation: -30, x:-1, y: -3, yoyo:true, transformOrigin: 'bottom right'})

    .to("#body",  1.5, {rotation: -3, yoyo:true, y:2, transformOrigin: 'bottom left'}, 0)

    .to("#arm",  2, {rotation: -20, yoyo:true, transformOrigin: 'bottom left'}, "-1")

    
    var web = new TimelineMax({repeat:-1});

   web.from('.ws', .5, {scale: '0', transformOrigin: 'center', ease: Back.easeOut.config(1.7)})

   web.staggerFrom('.st44', 5, {drawSVG:"0%"},  0.2)



   var tl =  new TimelineMax({repeat:-1});
   mySplitText = new SplitText("#txt", {type:"words,chars"}), 
   chars = mySplitText.chars;
   tl.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1");

    tl.timeScale(1);



 var dtl = new TimelineMax({repeat:-1});

   dtl
    .from("#d_hand",  .1, {rotation: 10, yoyo:true,  transformOrigin: 'top right'})
    .from(".d_hand2",  .2, {rotation: 3, yoyo:true,  transformOrigin: 'top right'});


     TweenMax.from('.st21', 1, { rotation: -8, yoyo:true, repeat:-1,delay:1 });


     // TweenMax.from('.d_reye', 1, {  scaleY: 0, yoyo:true, repeat:-1, transformOrigin: 'center center'});
     // TweenMax.from('.d_reye2', 1, {  scaleY: 0, yoyo:true, repeat:-1, transformOrigin: 'center center'});



  

    // slider setting 


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

