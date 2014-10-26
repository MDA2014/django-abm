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

$(function(){
  $("form").on("click",function(e){
    e.preventDefault();
    var request = $.ajax({
      url: "/persona/json/new",
      type: "POST",
      data: $( this ).serialize(),
      dataType: "json"
    });

    request.always(function( msg ) {
      if(msg.respuesta){
        alert(msg.mensaje);
      }
    });

  });
});