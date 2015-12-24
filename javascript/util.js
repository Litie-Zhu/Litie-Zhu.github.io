$(document).ready(function() {

	var $win = $(window);
	var $blur = $('.background_blur');
	var $header = $('header');
	var $name = $('nav #name');
	// var $about = $('#about');
	// var $aboutTab = $('#aboutTab');
	// var $resume = $('#resume');
	// var $resumeTab = $('#resumeTab');
	// var $projects = $('#projects');
	// var $projectsTab = $('#projectsTab');
	$win.scroll(function() {
		var $screenTop = $win.scrollTop();

		var $oVal = $screenTop / 100;
		$blur.css('opacity',$oVal);

		if($screenTop >= ($header.offset().top + $header.height())) {
			$name.fadeIn();
		} else {
			$name.fadeOut();
		}

		// +1 to $screenTop because when tab is clicked, $screenTop is slightly less than offset().top
		// $aboutTab.toggleClass('active', $screenTop < ($about.offset().top + $about.outerHeight(true)));
		// $resumeTab.toggleClass('active', $screenTop+1 >= $resume.offset().top && $screenTop < ($resume.offset().top + $resume.outerHeight(true)));
		// $projectsTab.toggleClass('active', $screenTop+1 >= $projects.offset().top && $screenTop < ($projects.offset().top + $projects.outerHeight(true)));
	});
});