$(document).ready(function() {
	$('nav #tabs li a').click(function() {
		if(!$(this).hasClass('active')) {
			$('nav #tabs li a').removeClass('active');
			$(this).addClass('active');
		}
	});

	var $win = $(window);
	var $blur = $('.background_blur');
	var $header = $('header');
	var $name = $('nav #name');
	var $about = $('#about');
	var $aboutTab = $('#aboutTab');
	var $resume = $('#about');
	var $resumeTab = $('#resumeTab');
	var $projects = $('#projects');
	var $projectsTab = $('#projectsTab');
	$win.scroll(function() {
		var $screenTop = $win.scrollTop();

		var $oVal = $screenTop / 240;
		$blur.css('opacity',$oVal);


		if($screenTop >= ($header.offset().top + $header.height())) {
			$name.fadeIn();
		} else {
			$name.fadeOut();
		}

		if($screenTop >= $about.offset().top || $screenTop < $about.offset().top) {
			$aboutTab.addClass('active')
			$resumeTab.removeClass('active')
			$projectsTab.removeClass('active')
		} else {
			$aboutTab.removeClass('active')
		}
		if($screenTop >= $resume.offset().top) {
			$resumeTab.addClass('active')
			$aboutTab.removeClass('active')
			$projectsTab.removeClass('active')
		} else {
			$resumeTab.removeClass('active')
		}
		if($screenTop >= $projects.offset().top) {
			$projectsTab.addClass('active')
			$aboutTab.removeClass('active')
			$resumeTab.removeClass('active')
		} else {
			$projectsTab.removeClass('active')
		}
	});
});