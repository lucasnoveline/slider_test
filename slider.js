function getValue () {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	var val = slider.value;
	if (val < 17) {
		var dia = val + 14;
		var data = dia + ' de Junho';
	}
	else {
		var dia = val - 16;
		var data = dia + ' de Julho';
	}
	output.innerHTML = slider.value;

	slider.oninput = function() {
	  output.innerHTML = this.value;
	}
}
