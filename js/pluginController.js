
$('.navbar-toggle').click(function() {
   $('.navbar-collapse').slideToggle();
})





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
  amplitude: 30,
 
  speed: .25
});

// expand 
var tl = new TimelineMax({ repeat: -1 });


tl.fromTo('._leaf1-group', 3, {
  rotation: 3, 
   transformOrigin: 'bottom',
    ease:Linear.easeNone
},
{
  rotation: -3,

  repeat: -1,
  
  yoyo: true,
  immediateRender:false,
   transformOrigin: 'bottom',
   ease:Linear.easeNone
}, 0)


.fromTo('._leaf1', 1, {
  rotation: 5, 
   transformOrigin: 'bottom',
    ease:Linear.easeNone
},
{
  rotation: -5,

  repeat: -1,
  y: 25,
  yoyo: true,
  immediateRender:false,
   transformOrigin: 'bottom left',
   ease:Linear.easeNone
});


TweenMax.fromTo('.bee', 1, {
 
 y: -5,
   x: -5,
  repeat: -1,
   yoyo: true,
},
{
 y: 10,
   x: 20,
  repeat: -1,
   yoyo: true,
   delay: 1,
 repeatDelay: 1,
})

