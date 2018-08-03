
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
