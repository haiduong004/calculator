var input = document.getElementById('inputBox');
var buttons = document.getElementsByTagName('button');

var string ="";
var arr=Array.from(buttons);
arr.forEach(button => {
	button.addEventListener('click', (e) => {
		if (e.target.innerHTML == "=") {
			string = eval(string);
			input.value = string;
		}
		else if (e.target.innerHTML == "AC") {
			string = "";
			input.value = string;
		}
		else if ( e.target.innerHTML == "DEL") {
			string = string.slice(0, -1);
			input.value = string;
		}
		else {
			string += e.target.innerHTML;
			input.value = string;
		}
	})
})