
$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.logo').css({
     'top': (0-(scrolled*0.5)) + 'px',
     'transform': 'scale(' + Math.max(0.5, Math.min(1 - scrolled * 0.01, 1)) + ')'
   });
   $('.x-wing').css({
      top: (5 + scrolled * 0.5) + 'px',
      left: (scrolled * 1.5) + 'px'
    });
  
   $('.millenium-falcon').css({
     top: (100 + scrolled * 0.5) + 'px',
     right: (10 + scrolled * 0.5) + 'px'
   });
  
   $('.stardestroyer').css('left',(1200-(scrolled*.4))+'px');
   $('.text').css('top',(200-(scrolled*.5))+'px'); 
}
