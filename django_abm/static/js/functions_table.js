function cargarTabla(idTabla, url, callback){
	$(idTabla + " tbody").empty();
	$.getJSON(url, function(data){
		jQuery.each(data,function(index, element){
			$(idTabla + " tbody").append(addFila(index, element));
		});
		callback.call();
	});
	
}	