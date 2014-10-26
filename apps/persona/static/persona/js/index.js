$(function(){
	cargarTabla("table", "/persona/json/", function(){
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
  $(document).on('click', '.direccion',function(){
		$('#modal_direccion').modal("toggle");
	});
});

function addFila(index, elemento){
	elementos = '<td>'+ (index + 1) +'</td><td>'+ elemento.fields.nombre +'</td><td>'+ elemento.fields.apellido +'</td><td>'+ elemento.fields.edad +'</td>';
	botones = '<td><div class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Relaciones <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a class="direccion">Ver Direccion</a></li></ul></div> <a href="/persona/edit"  class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Editar"><span class="glyphicon glyphicon-pencil"></span></a> <a href="/persona/delete" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Eliminar"><span class="glyphicon glyphicon-trash"></span></a></td>';

	return '<tr>' + elementos + botones + '</tr>'; 
}