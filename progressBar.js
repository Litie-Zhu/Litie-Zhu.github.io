function displayProgress() {

	var minDate = new Date("August 27, 2012 12:00:00");
	var today = new Date();
	var maxDate = new Date("December 31, 2015 12:00:00");

	var nbTotalDays = Math.floor((maxDate.getTime() - minDate.getTime()) / 86400000);
	var nbPastDays = Math.floor((today.getTime() - minDate.getTime()) / 86400000);

	var percent = nbPastDays / nbTotalDays * 100;

	// Extreme cases
	if (percent < 0) {
		percent = 0;
	} else if (percent > 100) {
		percent = 100;
	}

	$("#progressbar").updateProgress(percent);
}

$.fn.updateProgress = function(val) {			
	var max=100;
	return this.each(
		function(){		
			var div=$(this);
			var innerdiv=div.find(".progress");
			
			if(innerdiv.length!=1){						
				innerdiv=$("<div class='progress'></div>");					
				div.append("<div class='text'>&nbsp;</div>");
				$("<span class='text'>&nbsp;</span>").css("width",div.width()).css("height",div.height()).appendTo(innerdiv);					
				div.append(innerdiv);					
			}
			var width=Math.round(val/max*100);
			innerdiv.css("width",width+"%");	
			div.find(".text").html(width+" %");
		}
	);
}