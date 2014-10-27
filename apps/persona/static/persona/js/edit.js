$(function(){
  loadForm(function(){
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

function loadForm(callback){

  var persona_id = getURL_Id();
  
  $.getJSON("/persona/json/view/" + persona_id + "/",function(data){

    $("#persona_nombre").val(data[0].fields.nombre);
    $("#persona_apellido").val(data[0].fields.apellido);
    $("#persona_edad").val(data[0].fields.edad);

    callback.call();

  });
  
}

$(function(){
  $("form").validate();
  $("form").on("submit",function(e){
    e.preventDefault();
    if($(this).valid()){
      var id = getURL_Id();
      var request = $.ajax({
        url: "/persona/json/edit/" + id + "/",
        type: "PUT",
        data: $( this ).serialize(),
        dataType: "json"
      });

      request.done(function( msg ) {
        $(".alert p").text(msg.mensaje);
        if(msg.respuesta){
        	$(".alert").hide();
        	window.location = "../?status=true&operation=edit";
        }else{
          $(".alert").removeClass("alert-success");
          $(".alert").addClass("alert-danger");
          $(".alert").show();
          $('html, body').animate({scrollTop : 0},800);
        }
      });

      request.fail(function( msg ) {
        $(".alert p").text("Ocurrió un error al realizar el guardado. Intente nuevamente en un instante.");
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-danger");
        $(".alert").show();
        $('html, body').animate({scrollTop : 0},800);
      });
    }
  });
});