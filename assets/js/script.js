$(document).ready(function(){
    $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 0 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
	
    $('.testi2').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    1170: {
      items: 1
    }
  }
});

$(function() {
    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    $('.testi2 .owl-dot').each(function() {
        $(this).addClass('dotnumber' + dotcount);
        $(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });
    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;
    $('.testi2 .owl-item').not('.cloned').each(function() {
        $(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });
    $('.testi2 .owl-dot').each(function() {
        grab = jQuery(this).data('info');
        slidegrab = $('.slidenumber' + grab + ' img').attr('src');
        console.log(slidegrab);
        $(this).css("background-image", "url(" + slidegrab + ")");
    });
    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT 

});
  // isotope
  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click
      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }


    
    window.onscroll = function() {scrollFunction()};

    
(function(){
    
 "use strict";

$('.navbar-brand, .top-scroll a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	|| location.hostname == this.hostname) {

	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	  $('html,body').animate({
		scrollTop: target.offset().top
	  }, 2000);
	  return false;
	}
  }
});
var navbarHeight = $('.main-nav').height();
$('a.btnAbout, a.hire').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	|| location.hostname == this.hostname) {

	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	  $('html,body').animate({
		scrollTop: target.offset().top - navbarHeight
	  }, 2000);
	  return false;
	}
  }
});    
//=======================flexslider==============================================

//=====================================================================
       

//=================================menu scroll==========================================
$('.navbar-nav').onePageNav({
       scrollOffset: navbarHeight,
	   scrollSpeed:1000,
        scrollThreshold: 0.25
	});
//========================================= portfolio filter =========================================	
	

 //============================ function =========================================

imgHover();
lightboxPhoto(); 
winHeight();
barScroll();
  //============================ nav container sticky =========================================

  $(".navbar").sticky({ topSpacing: 0 });
$('ul.nav li a').click(function(){
$('.navbar-inverse .navbar-collapse').removeClass('in')
});
//================= show content ==============================================================
   
})();


$(window).load(function(){
$('#flex-head').flexslider({
animation: "slide",    
slideshow: true
}); 
  navScroll();
$('#filterOptions a').click(function (e) {
    e.preventDefault();
 
    // set active class
    $('#filterOptions a').removeClass('cur');
    $(this).addClass('cur');
 
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
 
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
	});
    /* initialize shuffle plugin */
    var $grid = $('#grid'),
	$sizer = $grid.find('.shuffle__sizer');
 
    $grid.shuffle({
        itemSelector: '.box', // the selector for the items in the grid
		sizer: $sizer
    });
});

$(window).resize(function(){
navScroll();
winHeight();

});
$(window).scroll(function() {
navScroll();
 }); 
//================================ function ========================================

function imgHover(){
 $('.thumb-img').hover(function(){
     $(this).find('.link-search, .link-chain').fadeIn();
	 $('.link-search').removeClass('fadeOutLeft').addClass('fadeInLeft');
	 $('.link-chain').removeClass('fadeOutRight').addClass('fadeInRight');
    $(this).children('.folio-caption').animate({
    bottom:'0px'
    });
     
 }, function(){
 $(this).find('.link-search, .link-chain').fadeOut();
  $('.link-search').removeClass('fadeInLeft').addClass('fadeOutLeft');
	 $('.link-chain').removeClass('fadeInRight').addClass('fadeOutRight');
    $(this).children('.folio-caption').animate({
    bottom:'-58px'
    });
     
 });   
}

function lightboxPhoto() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    }); 
}


function winHeight(){
 //==================================== height header============================
var wHeight = $(window).height();
$('.header').height(wHeight); 
}

    function barScroll(){
     setTimeout(function(){

    $('.progress-bar').each(function() {
        var me = $(this);
        var pe =  $(this).children('.precent-value');
        var perc = me.attr("aria-valuenow");

        var current_perc = 0;

        var progress = setInterval(function() {
            if (current_perc>=perc) {
                clearInterval(progress);
            } else {
                current_perc +=1;
                me.css('width', (current_perc)+'%');
            }

            pe.text((current_perc)+'%');

        },90);
    });
}, 300);

 
        
    }
    
	
    });