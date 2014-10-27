function cargarTabla(idTabla, data, callback){
	$(idTabla + " tbody").empty();
	jQuery.each(data,function(index, element){
		$(idTabla + " tbody").append(element);
	});
	if(callback){
		callback();
	}
}

function getTabla(url, callback){
	var tabla = new Array();
	$.getJSON(url, function(data){
		jQuery.each(data,function(index, element){
			var item = addFila(index, element);
			tabla.push(item);
		});
		callback(tabla);
	});
}
