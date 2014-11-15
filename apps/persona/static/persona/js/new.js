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
  loadProvincia(init);
});

$(function(){
  $("form").validate();
  $("form").on("submit",function(e){
    showMiniLoading();
    e.preventDefault();
    if($(this).valid()){
      var request = $.ajax({
        url: "/persona/json/new/",
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
    }else{
      hideMiniLoading();
    }
  });
  $("#domicilio_provincia").on("change",function(){
    loadLocalidad($(this).val());
    showMiniLoading();
  });
});

function loadProvincia(callback){
  
  $.getJSON("/persona/json/list/provincia/", function(data){
    $.each(data, function(index, item){
      $("#domicilio_provincia").append('<option value="'+item.pk+'" >'+item.fields.nombre+'</option>');
    });
    var id_provincia = data[0].pk;
    loadLocalidad(id_provincia);
    if(callback){
      callback.call();    
    }
  });
}

function loadLocalidad(id_provincia){
  $("#domicilio_localidad").empty();
  $.getJSON("/persona/json/list/localidad/" + id_provincia  + "/", function(data){
      $.each(data, function(index, item){
        $("#domicilio_localidad").append('<option value="'+item.pk+'" >'+item.fields.nombre+'</option>');
      });
      hideMiniLoading();
    });
}
