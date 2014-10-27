$(function(){
	setTimeout(
  		function() {
  			$("body").css("background", "rgba(214, 214, 214, 0.89)");
			$("body").css("color", "black");
			$(".loading_wrap").hide();			
			$(".container").show();
			$("header").show();
			$("footer").show();
		}, 5000);
});

$(function(){
  $("form").validate();
  $("form").on("submit",function(e){
    e.preventDefault();
    if($(this).valid()){
      var request = $.ajax({
        url: "/persona/json/new",
        type: "POST",
        data: $( this ).serialize(),
        dataType: "json"
      });

      request.done(function( msg ) {
        $(".alert p").text(msg.mensaje);
        if(msg.respuesta){
          $(".alert").hide();
          window.location = "../?status=true&operation=new";
        }else{
          $(".alert").removeClass("alert-success");
          $(".alert").addClass("alert-danger");
          $(".alert").show();
        }
      });

      request.fail(function( msg ) {
        $(".alert p").text("Ocurrió un error al realizar el guardado. Intente nuevamente en un instante.");
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-danger");
        $(".alert").show();
      });
    }
  });
});