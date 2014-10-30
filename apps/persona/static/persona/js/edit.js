function init(){
  setTimeout(
        function() {
          $("body").css("background", "rgba(214, 214, 214, 0.89)");
          $("body").css("color", "black");
          $(".loading_wrap").hide();			
          $(".container").show();
          $("header").show();
          $("footer").show();
      }, 5000);
}

$(function(){
  loadForm(loadProvincia);
});

function loadForm(callback){

  var persona_id = getURL_Id();
  
  $.getJSON("/persona/json/view/" + persona_id + "/",function(data){

    $("#persona_nombre").val(data[0].fields.nombre);
    $("#persona_apellido").val(data[0].fields.apellido);
    $("#domicilio_calle").val(data[1].fields.calle);
    $("#domicilio_numero").val(data[1].fields.numero);
    $("#persona_dni").val(data[0].pk);
    
    callback(data[3].pk,data[2].pk, init);

  });
  
}

$(function(){
  $("form").validate();
  $("form").on("submit",function(e){
    showMiniLoading();
    e.preventDefault();
    if($(this).valid()){
      var id = getURL_Id();
      var request = $.ajax({
        url: "/persona/json/edit/" + id + "/",
        type: "POST",
        data: $( this ).serialize(),
        dataType: "json"
      });

      request.done(function( msg ) {
        $(".alert p").text(msg.mensaje);
        if(msg.respuesta){
        	$(".alert").hide();
        	window.location = "../../?status=true&operation=edit";
        }else{
          $(".alert").removeClass("alert-success");
          $(".alert").addClass("alert-danger");
          $(".alert").show();
          $('html, body').animate({scrollTop : 0},800);
          hideMiniLoading();
        }
      });

      request.fail(function( msg ) {
        $(".alert p").text("Ocurrió un error al realizar el guardado. Intente nuevamente en un instante.");
        $(".alert").removeClass("alert-success");
        $(".alert").addClass("alert-danger");
        $(".alert").show();
        $('html, body').animate({scrollTop : 0},800);
        hideMiniLoading();
      });
    }
  });
  $("#domicilio_provincia").on("change",function(){
    loadLocalidad($(this).val());
    showMiniLoading();
  });
});
function loadProvincia(provincia, localidad, callback){
  
  $.getJSON("/persona/json/list/provincia/", function(data){
    $.each(data, function(index, item){
      $("#domicilio_provincia").append('<option value="'+item.pk+'" >'+item.fields.nombre+'</option>');
    });
    $("#domicilio_provincia").val(provincia);
    loadLocalidad(provincia,localidad, callback);
  });
}

function loadLocalidad(provincia,localidad,callback){
  $("#domicilio_localidad").empty();
  $.getJSON("/persona/json/list/localidad/" + provincia  + "/", function(data){
      $.each(data, function(index, item){
        $("#domicilio_localidad").append('<option value="'+item.pk+'" >'+item.fields.nombre+'</option>');
      });
      $("#domicilio_localidad").val(localidad);
      hideMiniLoading();
      if(callback){
        callback.call();    
      }
    });
}