$(document).ready(function(){

  $(window).scroll(function(){
    $(".scroll-disappear").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
  });

  $("img[class*=\"img-responsive\"]").each(function(index,element) {
    console.log($(element).attr('class'));
    if ($(element).attr('class')!= 'img-responsive full-screen-img') {
      $(element).attr("data-action","zoom");
    }
  });

  $('#template-to-top').hide();
  $(".bs-docs-sidebar").hide();

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


  var allLargeImgs = document.getElementsByClassName('full-screen-img');

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
    } else {
      $('#template-to-top').fadeOut();
    }

    if ($(this).scrollTop() > 600) {

      var hasLargeImg = false;

      Array.prototype.forEach.call(allLargeImgs, function(el) {
          // console.log(el);
          if (checkVisible(el)) {
            hasLargeImg = true;
          }
      });

      if (hasLargeImg) {
        $(".bs-docs-sidebar").fadeOut('slow');
      } else {
        $(".bs-docs-sidebar").fadeIn('slow');
      }
    }
    else {
        $(".bs-docs-sidebar").fadeOut("slow");
    }

    // if (checkVisible(testPic)) {
    //   $(".bs-docs-sidebar").fadeOut("slow");
    // } else {
    //   $(".bs-docs-sidebar").fadeIn('slow');
    // }
  });



  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });

    $('.fade-in').addClass('load');


    $(".p-center-wrapper button[data-toggle='collapse']").click (function () {
      $(this).text(function(i,old){
        var newString = "";
        if (old.startsWith("See")) {
          newString = old.replace("See","Hide");
        } else if (old.startsWith("Hide")){
          newString = old.replace ("Hide","See");
        } else {
          newString = old;
        }
        return newString;
      });
    })




    // let captions = document.getElementsByClassName('captions');
    // let imgHeight = document.getElementById('portfolio-image').style.height;
    // console.log(imgHeight);
    // let imgWidth = document.getElementById('portfolio-image').style.width;
    // for (var i=0;i<captions.length;i++) {
    //   console.log("Height: "+imgHeight);
    //   console.log("Width: "+imgWidth);
    //   captions[i].height = imgHeight;
    //   captions[i].width = imgWidth;
    // }








});
