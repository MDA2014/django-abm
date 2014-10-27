$(function(){
	loadInfo(function(){
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
});

$(function(){
	$("#delete_persona").on("click",function(){
		var id = getURL_Id();
		var request = $.ajax({
        url: "/persona/json/delete/" + id + "/",
        type: "DELETE",
        dataType: "json"
      });

      request.done(function( msg ) {
        $(".alert p").text(msg.mensaje);
        if(msg.respuesta){
          $(".alert").hide();
          window.location = "../?status=true&operation=delete";
        }else{
          $(".alert").removeClass("alert-success");
          $(".alert").addClass("alert-danger");
          $(".alert").show();
          $('html, body').animate({scrollTop : 0},800);
        }
      });

      request.fail(function( msg ) {
        $(".alert p").text("Ocurrió un error al realizar la eliminación. Intente nuevamente en un instante.");
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-danger");
        $(".alert").show();
        $('html, body').animate({scrollTop : 0},800);
      });
	});
});

function loadInfo(callback){

  var persona_id = getURL_Id();
  
  $.getJSON("/persona/json/view/" + persona_id + "/",function(data){

    $("#persona_nombre").text(data[0].fields.nombre);
    $("#persona_apellido").text(data[0].fields.apellido);
    $("#persona_edad").text(data[0].fields.edad);

    callback.call();

  });
  
}

