$(document).ready(function(){

  // Set navbar content depending on page.
  let path = window.location.pathname;
  let page = path.split("/").pop();
  let portfolioSelected = "";
  let resumeSelected = "";
  let aboutSelected = "";
  switch (page.split(".")[0]) {
    case "Portfolio":
      portfolioSelected = "class=\"selected\" ";
      break;

    case "Resume":
      resumeSelected = "class=\"selected\" "
      break;

    case "About":
      aboutSelected = "class=\"selected\" "
      break;

    default:
    //By default, when users are viewing project pages, they should be in the portfolio tab
      portfolioSelected = "class=\"selected\" ";
  }

  let navMenus = document.getElementsByClassName('nav-menu-class');
  for (var i=0;i<navMenus.length;i++) {
    navMenus[i].innerHTML =
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle mobile-opaque" data-toggle="collapse" data-target="#collapsible-nav">'+
            '<span class="sr-only">切换导航</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
          '</button>'+
          '<a class="navbar-brand" href="#">Yanfeng Jin (Tony)</a>'+
        '</div>'+
        '<div class="collapse navbar-collapse navbar-right" id="collapsible-nav">'+
          '<ul class="nav navbar-nav">'+
            '<li><a '+ portfolioSelected + 'href="Portfolio.html">Portfolio</a></li>'+
            '<li><a '+ resumeSelected + 'href="#">Resume</a></li>'+
            '<li><a '+ aboutSelected + 'href="About.html">About</a></li>'+
          '</ul>'+
        '</div>';
  }

  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
  });


  $('#template-to-top').hide();
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
    } else {
      $('#template-to-top').fadeOut();
    }
  });

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-50
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  //Click event to scroll to top
    $('#template-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });






});
