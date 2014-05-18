$( document ).ready(function() {
  var windowOrientation = typeof window.orientation;
  if (windowOrientation == 'undefined'){
    var s = skrollr.init({forceHeight: false});// Init Skrollr
  }
  else{
    // window.viewportUnitsBuggyfill.init()
    $("#slide-1").css("height", window.innerHeight);
  }

  function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        $("#slide-1").css("height", window.innerHeight);
        break; 
      default:
        $("#slide-1").css("height", window.innerHeight);
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();

  $('.bxslider').bxSlider({
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '<div class="floatLeft button"><img src="img/nextIcon.png" /></div>',
    prevText: '<div class="floatLeft button" ><img src="img/backIcon.png" /></div>'
  });

  animateScrolling()

});

function animateScrolling(){
  $('a[href*=#]').on('click', function(e){
    e.preventDefault();
    if($( $.attr(this, 'href') ).length > 0 ){
      $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 400);
    }
    return false;
  });
}

function getSlide(action, num){
  slideCount = $('#projects div').length();
  var oldImg;
  var newImg = num; 

  oldImg = $('#projects div.sel').attr('id');
  oldImg = parseInt(oldImg.substr(7 ,oldImg.length));

  if (action == 'prev') newImg = oldImg - 1;
  if (action == 'next') newImg = oldImg + 1;
  
  if (newImg == 0) newImg = slideCount;
  if (newImg == slideCount + 1) newImg = 1;

  $('#project' + oldImg).animate({
    left:"-100px"
  });

  $('#projectcircle' + oldImg).removeClass('selected');
  $('#project' + oldImg).removeClass('sel');
  $('#projectcircle' + newImg).addClass('selected');
  $('#project' + newImg).addClass('sel');
}


