function getValue () {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	var val = slider.value;
	if (val < 17) {
		var dia = Number(val) + 14;
		var data = dia + ' de Junho';
	}
	else {
		var dia = Number(val) - 16;
		var data = dia + ' de Julho';
	}
	output.innerHTML = data;

	slider.oninput = function() {
		var val = this.value;
		if (val < 17) {
			var dia = Number(val) + 14;
			var data = dia + ' de Junho';
		}
		else {
			var dia = Number(val) - 16;
			var data = dia + ' de Julho';
		}
		output.innerHTML = data;
	}
}
