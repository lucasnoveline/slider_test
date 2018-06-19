function changeInput () {
	// Coletando valor do slider
	var slider = document.getElementById("myRange");
	var val = slider.value;

	// Convertendo em data
	if (val < 17) {
		var dia = Number(val) + 14;
		var data = '06.' + dia;
	}
	else {
		var dia = Number(val) - 16;
		var data = '07.' + dia;
	}

	// Caso de click no Slider
	slider.oninput = function() {
		var val = this.value;
		if (val < 17) {
			var dia = Number(val) + 14;
			var data = '06.' + dia;
		}
		else {
			var dia = Number(val) - 16;
			var data = '07.' + dia;
		}
		// Modificando tabela de grupos
		var tables = document.getElementsByClassName("tables");
		var i;

		// Para cada tabela de grupos
		for (i = 0; i < tables.length; i++) { 
		    var group = tables[i].id;
		    var frame = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://lucasnoveline.github.io/tables_test2?file_path=" + group + "/" + data + ".json' align='middle'></iframe>";
		    console.log(frame);
		    tables[i].innerHTML = frame;
		}
		}

		// Modificando tabela de grupos
		var tables = document.getElementsByClassName("tables");
		var i;

		// Para cada tabela de grupos
		for (i = 0; i < tables.length; i++) { 
		    var group = tables[i].id;
		    var frame = "<iframe width='300' height='200' frameborder='0' scrolling='no' src='https://lucasnoveline.github.io/tables_test2?file_path=" + group + "/" + data + ".json' align='middle'></iframe>";
		    console.log(frame);
		    tables[i].innerHTML = frame;
		}
}
