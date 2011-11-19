$(document).ready(function(){ 
	$("a").hover(
		function () {
        	$("img", this).css('display', '').fadeIn(300);
    	},
		function () {
        	$("img", this).css('display', '').fadeOut(100);
    	}
	);
	$('#arrow').css('top', '50px');						   
    $('#arrow').animate({top: '-=50'}, 1000);
});
