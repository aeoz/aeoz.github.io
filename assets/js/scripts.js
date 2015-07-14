jQuery(function($){

	// smooth scroll
    var $window = $(window);    //Window object
    var scrollTime = .5;     //Scroll time
    var scrollDistance = 200;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
    $window.on("mousewheel DOMMouseScroll", function(event){
    
	   event.preventDefault(); 
	                    
	   var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
	   var scrollTop = $window.scrollTop();
	   var finalScroll = scrollTop - parseInt(delta*scrollDistance);
	      
	   TweenMax.to($window, scrollTime, {
	     scrollTo : { y: finalScroll, autoKill:true },
	       ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
	       autoKill: true,
	       overwrite: 5              
	    });
	          
	});

	// scrolltop
	$('a').on('click',function () {
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
		return false;
	});

	// scrollspy
	$('#main-nav-container').scrollspy();

	// affix
	$('.main-nav-container').affix({
		offset: {
			top: function () {
		    return (this.top = $('#home').outerHeight(true)-130)
		  }
		}
	});

	// direction aware hover
	$(' .work-item').each( function() { $(this).hoverdir({
		hoverDelay : 50
	}); } );

	// map
	$('#map').gmap3({
      marker:{
        address: "Davao City, Philippines"
      },
      map:{
        options:{
          zoom: 14,
          zoomControl: false,
          scaleControl: false,
  		  scrollwheel: false,
        }
      },
      infowindow:{
	     address:"Davao City, Philippines",
	     options:{
	       content: "I Live Here! Davao City, Philippines"
	     }
	  }
    });

    // video background
    var BV = new $.BigVideo({useFlashForFirefox:false});
    BV.init();
    BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true}, {altSource:'http://vjs.zencdn.net/v/oceans.ogv'});


});