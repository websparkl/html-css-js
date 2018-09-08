window.addEventListener('load', loadAction);
var c = window.document.getElementById("add");
console.log(c)
foreachdemo();
function loadAction(){ 
	// var value = document.getElementById("calc").value;
	window.document.getElementById("add").addEventListener('click', add);
	window.document.getElementById("sub").addEventListener('click', sub);
	window.document.getElementById("mul").addEventListener('click', mul);
	window.document.getElementById("div").addEventListener('click', div);
	// window.document.getElementById("1").addEventListener('click', oneButton);
	// window.document.getElementById("2").addEventListener('click', twoButton);
	// window.document.getElementById("0").addEventListener('click', zeroButton);
	// window.document.getElementById("3").addEventListener('click', threeButton);
	numberAddEvent("+", "+");
	numberAddEvent("0", 0);
	numberAddEvent("1", 1);
	numberAddEvent("2", 2);
	numberAddEvent("4", 4);
	numberAddEvent("5", 5);
	numberAddEvent("6", 6);
	numberAddEvent("3", 3);
	window.document.getElementById("=").addEventListener('click', equal);

	// numberAddEvent("5", 5);
	// numberAddEvent("6", 6);
	
	// window.document.getElementById("4").addEventListener('click', numberButton(4));

	// window.document.getElementById("5").addEventListener('click', numberButton(5));

	// window.document.getElementById("6").addEventListener('click', numberButton(6));




}

function equal(){
	console.log(document.getElementById("calc").value)
	document.getElementById("calc").value = 
	eval(document.getElementById("calc").value)
}

function numberAddEvent(id, val){
	console.log(id, val)
	window.document.getElementById(id).addEventListener('click', function numberButton(){
		console.log('val is', val)
		document.getElementById("calc").value = (document.getElementById("calc").value=="0"?"":document.getElementById("calc").value) + val.toString();
	});
}
function add(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a + b;
	//alert("Sum is "+c);
    document.getElementById("output").innerHTML = "<p>Addition is: "+c+"</p>";
    // document.write('Result is', c)
	
}
function sub(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a < b ? (b-a) : (a-b) ;
	document.getElementById("output").innerHTML = "<p>Substraction is: "+c+"</p>";
		// alert("Subtraction is "+c);
}
function mul(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a*b;
	document.getElementById("output").innerHTML = "<p>Multiplication is: "+c+"</p>";
		// alert("Subtraction is "+c);
}
function div(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a/b ;
	document.getElementById("output").innerHTML = "<p>Division is: "+c+"</p>";
		// alert("Subtra is "+c);
}
function oneButton(){
	document.getElementById("calc").value = 
	(document.getElementById("calc").value=="0"?"":document.getElementById("calc").value) +"1"
}
function twoButton(){
	document.getElementById("calc").value = (document.getElementById("calc").value=="0"?"":document.getElementById("calc").value )+ "2"
}
function zeroButton(){
	document.getElementById("calc").value = (document.getElementById("calc").value=="0"?"":document.getElementById("calc").value) + "0"
}
function threeButton(){
	var value = document.getElementById("calc").value;
	//console.log(value)
	document.getElementById("calc").value =  (value=="0"? "":value ) + "3";
	var a = eval("2+67+45-78");
	console.log(a)
}

// function numberButton(val){
// 	console.log('val is', val)
// 	document.getElementById("calc").value = (document.getElementById("calc").value=="0"?"":document.getElementById("calc").value) + val.toString();
// }

function foreachdemo(){
	var arr1 = [12, 23, 34, 34];
	arr1.forEach(function(ele,index){
		console.log("ele is", ele,"index is", index)

	})
}