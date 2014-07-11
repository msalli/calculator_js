window.onload = function(event){
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var seven = document.getElementById("seven");
	var eight = document.getElementById("eight");
	var nine = document.getElementById("nine");
	var zero = document.getElementById("zero");
	
	var mutiply = document.getElementById("multiply");
	var divide = document.getElementById("divide");
	var add = document.getElementById("add");
	var subtract = document.getElementById("sub");

	var clear = document.getElementById("clear");

	var display = document.getElementById("result_display_value");
	var operator = document.getElementById("operator_display");
	var enter = document.getElementById("enter");

	var calculator = "";

	var array = [];


	//NUMBER BUTTONS
	one.onclick = function(event) {
		calculator += one.innerHTML;
		display.innerHTML = calculator;
	}

	two.onclick = function(event) {
		calculator += two.innerHTML;
		display.innerHTML = calculator;
	}

	three.onclick = function(event) {
		calculator += three.innerHTML
		display.innerHTML = calculator;
	}

	four.onclick = function(event) {
		calculator += four.innerHTML
		display.innerHTML = calculator;
	}

	five.onclick = function(event) {
		calculator += five.innerHTML;
		display.innerHTML = calculator;
	}

	six.onclick = function(event) {
		calculator += six.innerHTML;
		display.innerHTML = calculator;
	}

	seven.onclick = function(event) {
		calculator += seven.innerHTML;
		display.innerHTML = calculator;
	}

	eight.onclick = function(event) {
		calculator += eight.innerHTML;
		display.innerHTML = calculator;
	}

	nine.onclick = function(event) {
		calculator += nine.innerHTML;
		display.innerHTML = calculator;
	}

	zero.onclick = function(event) {
		calculator += zero.innerHTML;
		display.innerHTML = calculator;
	}

	
	//OPERATOR BUTTONS!
	add.onclick = function(event) {
		operator.innerHTML = add.innerHTML;
		display.innerHTML = "";
		array.push(parseFloat(calculator));
		calculator = "";
		console.log(array);


		// 	following clicks, save to var = numString2
		
	}

	subtract.onclick = function(event) {
		operator.innerHTML = subtract.innerHTML;
	}
	
	//CLEAR BUTTON
	clear.onclick = function(event) {
		display.innerHTML = "";
		operator.innerHTML = "";
		calculator = ""
	}

	//ENTER BUTTON, will add the 0 and 1 indicies of the array
	enter.onclick = function(event) {
		operator.innerHTML = "";
		array.push(parseFloat(calculator));
		calculator = "";
		display.innerHTML = array[0] + array[1];
		console.log(array);
	}

}

