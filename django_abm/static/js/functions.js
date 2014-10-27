$(function(){
  if($("#listado_modulos li").length < 1){
    $("#listado_modulos").parent().remove();
  }
  $(".alert .close").on("click",function(){
      $(".alert").hide();
  });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getURL_Id(){
  var urlAux = window.location.pathname.split("/")
  return urlAux[urlAux.length - 2];
}
