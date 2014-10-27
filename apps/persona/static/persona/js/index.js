var datos_tabla = [];
var cant_items = 10;
var pag_actual = 0;

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
	if(getParameterByName('status') == "true"){
		var op = getParameterByName('operation');
		if(op == "new"){
			$(".alert p").text("Se ha realizado el guardado con éxito.");
		}
		if(op == "edit"){
			$(".alert p").text("Los cambios han sido guadados correctamente.");
		}
		if(op == "delete"){
			$(".alert p").text("Se realizó la eliminación con éxito");
		}
		$(".alert").show();
	}
}

$(function(){
	getTabla("/persona/json/", function(data){
		datos_tabla = data;
		min = parseInt(pag_actual * cant_items);
		max = (min + cant_items);
		disablePaginationButton();
		cargarTabla("table", data.slice(min, max), init);
	});
	

});

$(function(){
	$(document).on('click', '.direccion',function(){
		$('#modal_direccion').modal("toggle");
	});
	$("#primero").on("click", function(){
		if($(this).attr('disabled') != "disabled"){
			pag_actual = 0;
			disablePaginationButton();
			cargarTabla("table", datos_tabla.slice(0, cant_items));
		}
	});

	$("#anterior").on("click", function(){
		if($(this).attr('disabled') != "disabled"){
			pag_actual = pag_actual - 1;
			disablePaginationButton();
			min = parseInt(pag_actual * cant_items);
			max = (min + cant_items);
			cargarTabla("table", datos_tabla.slice(min, max));
		}
	});

	$("#siguiente").on("click", function(){
		if($(this).attr('disabled') != "disabled"){
			pag_actual = pag_actual + 1;
			disablePaginationButton();
			min = parseInt(pag_actual * cant_items);
			max = (min + cant_items);
			cargarTabla("table", datos_tabla.slice(min, max));
		}
	});
	$("#ultimo").on("click", function(){
		if($(this).attr('disabled') != "disabled"){
			pag_actual = (parseInt(datos_tabla.length / cant_items)-1);
			if((datos_tabla.length % cant_items) != 0){
				pag_actual += 1;
			}
			disablePaginationButton();
			min = parseInt(pag_actual * cant_items);
			max = (min + cant_items);
			cargarTabla("table", datos_tabla.slice(min, max));
		}
	});
});

function addFila(index, elemento){
	elementos = '<td>'+ (index + 1) +'</td><td>'+ elemento.fields.nombre +'</td><td>'+ elemento.fields.apellido +'</td><td>'+ elemento.fields.edad +'</td>';
	botones = '<td><div class="btn-group"><button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Relaciones <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a class="direccion">Ver Direccion</a></li></ul></div>'
	+ ' <a href="/persona/edit/'+ elemento.pk +'/"  class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Editar"><span class="glyphicon glyphicon-pencil"></span></a>'
	+ ' <a href="/persona/delete/'+ elemento.pk +'/" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Eliminar"><span class="glyphicon glyphicon-trash"></span></a></td>';

	return '<tr>' + elementos + botones + '</tr>'; 
}


function disablePaginationButton(){
	if(datos_tabla.length < cant_items){
		$(".pagination li").addClass("disabled");
		$(".pagination li a").attr("disabled", "disabled");
	}else{
		if(pag_actual == 0){
			addDisabledButton("#primero");
			addDisabledButton("#anterior");
			removeDisabledButton("#siguiente");
			removeDisabledButton("#ultimo");
		}else{
			last_page = (parseInt(datos_tabla.length / cant_items)-1);
			if((datos_tabla.length % cant_items) != 0){
				last_page += 1;
			}
			if(last_page == pag_actual){
				removeDisabledButton("#primero");
				removeDisabledButton("#anterior");
				addDisabledButton("#siguiente");
				addDisabledButton("#ultimo");
			}else{
				removeDisabledButton("#primero");
				removeDisabledButton("#anterior");
				removeDisabledButton("#siguiente");
				removeDisabledButton("#ultimo");
			}
		}
	}
}

function addDisabledButton(elemento){
	$(elemento).parent().addClass("disabled");
	$(elemento).attr("disabled", "disabled");
}

function removeDisabledButton(elemento){
	$(elemento).parent().removeClass("disabled");
	$(elemento).removeAttr("disabled");
}

