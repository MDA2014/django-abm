$(function(){
	setTimeout(
  		function() {
  			$("body").css("background", "rgba(214, 214, 214, 0.89)");
			$("body").css("color", "black");
			$(".loading_wrap").hide();			
			$(".container").show();
			$("header").show();
			$("footer").show();
		}, 1000);
});