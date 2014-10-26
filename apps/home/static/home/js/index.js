$(function(){
	setTimeout(
  		function() {
  			$("body").css("background", "white");
			$("body").css("color", "black");
			$(".loading_wrap").hide();			
			$(".container").show();
			$("header").show();
			$("footer").show();
		}, 10000);
});