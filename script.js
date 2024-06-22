var op = document.getElementsByClassName("operation")[0];
for (var i=0; i<6;i++) {
	var op2 = op.cloneNode(true);
	document.querySelector("#buttons").appendChild(op2);
}
var num = document.getElementsByClassName("number")[0];
for (var i=0; i<10;i++) {
	var num2 = num.cloneNode(true);
	document.querySelector("#buttons").appendChild(num2);
}
op.parentNode.removeChild(op);
num.parentNode.removeChild(num);
 
for (var i=0; i<document.querySelectorAll("button").length;i++) {
	document.querySelectorAll("button")[i].innerHTML = i;
}
var t4 = document.querySelectorAll("button")[4];
var t5 = document.querySelectorAll("button")[5];
var t7 = document.querySelectorAll("button")[7];
var t11 = document.querySelectorAll("button")[11];
t4.setAttribute("class","number");
t5.setAttribute("class","number");
t7.setAttribute("class","operation");
t11.setAttribute("class","operation");
var operations = ["AC","=","/","X","-","+"];
for(var i=0;i<document.querySelectorAll(".operation").length;i++){
	document.querySelectorAll(".operation")[i].innerHTML = operations[i];
}
for(var i=0;i<document.querySelectorAll(".number").length;i++){
	if (i<=2) {
		document.querySelectorAll(".number")[i].innerHTML = parseInt(i+7);
	}else if(i==3){
		document.querySelectorAll(".number")[i].innerHTML = parseInt(i+3);
	}else if(i==4){
		document.querySelectorAll(".number")[i].innerHTML = parseInt(i+1);
	}else if(i==5){
		document.querySelectorAll(".number")[i].innerHTML = parseInt(i-1);
	}else if(i<=8){
		document.querySelectorAll(".number")[i].innerHTML = parseInt(i-5);
	}else{
		document.querySelectorAll(".number")[i].innerHTML = parseInt(0);
	}
}
for (var i = 0; i < document.querySelectorAll(".number").length; i++) {
    document.querySelectorAll(".number")[i].onclick = (function(i) {
        return function() {
            show(document.querySelectorAll(".number")[i].innerHTML);
        };
    })(i);
}
let number = new Array();
let choice = "";
let myVar;
let myAddVar = parseInt(0);
let myMuliVar = parseInt(1);
let myDivVar = parseInt(1);
let myDiffVar = parseInt(0);
let myEqAddVar, myEqMultiVar, myEqDiffVar, myEqDivVar;
document.querySelector("#interface").innerHTML = parseInt(0);
var text;
function equal(){
	switch(choice){
		case "a":
			while(number.length > 0) {
		    	number.pop();
			}
			myEqAddVar = parseInt(document.querySelector("#interface").innerHTML)+myAddVar;
			document.querySelector("#interface").innerHTML = myEqAddVar;
			myAddVar = parseInt(0);
			break;
		case "div":
			while(number.length > 0) {
		    	number.pop();
			}
			myEqDivVar = myDivVar / parseInt(document.querySelector("#interface").innerHTML) ;
			document.querySelector("#interface").innerHTML = myEqDivVar;
			myDivVar = parseInt(1);
			time = 0;
			break;
		case "diff":
			while(number.length > 0) {
		    	number.pop();
			}
			myEqDiffVar = myDiffVar - parseInt(document.querySelector("#interface").innerHTML);
			document.querySelector("#interface").innerHTML = myEqDiffVar;
			myDiffVar = parseInt(0);
			time = 0;
			break;
		case "m":
			while(number.length > 0) {
		    	number.pop();
			}
			myEqMultiVar = parseInt(document.querySelector("#interface").innerHTML)*myMuliVar;
			document.querySelector("#interface").innerHTML = myEqMultiVar;
			myMuliVar = parseInt(1);
			break;
		default:
			
	}
}
function clear(){
	document.querySelector("#interface").innerHTML = 0;
	myAddVar = parseInt(0);
	myMuliVar = parseInt(1);
	myDiffVar = parseInt(0);
	myDivVar = parseInt(1);
	time = 0;
	while(number.length > 0) {
    	number.pop();
	}
}
function addition(){
	choice = "a";
	console.log(document.querySelector("#interface").innerHTML);
	equal();
	console.log(document.querySelector("#interface").innerHTML);
	while(number.length > 0) {
    	number.pop();
	}
	myAddVar += parseInt(document.querySelector("#interface").innerHTML);
	document.querySelector("#interface").innerHTML = myAddVar;
}
function division(){
	time++;
	if (time == 1) {
		
		console.log(myMuliVar );
		while(number.length > 0) {
	    	number.pop();
		}
		myDivVar = parseInt(document.querySelector("#interface").innerHTML)/myDivVar;
		console.log(myDivVar );
		document.querySelector("#interface").innerHTML = myDivVar;
		console.log(myMuliVar );
		choice = "div";
	}else{
		console.log(myMuliVar );
		while(number.length > 0) {
	    	number.pop();
		}
		myDivVar = parseInt(document.querySelector("#interface").innerHTML)/myDivVar;
		console.log(myDivVar );
		document.querySelector("#interface").innerHTML = 1/myDivVar;
		console.log(myMuliVar );
		choice = "div";
		time = 0;
	}
}
let time = 0;
function difference(){
	time++;
	if (time == 1) {
		choice = "diff";
		equal();
		while(number.length > 0) {
	    	number.pop();
		}
		myDiffVar -= parseInt(document.querySelector("#interface").innerHTML);
		document.querySelector("#interface").innerHTML = myDiffVar;
	}else{
		choice = "diff";
		equal();
		while(number.length > 0) {
	    	number.pop();
		}
		myDiffVar -= parseInt(document.querySelector("#interface").innerHTML);
		document.querySelector("#interface").innerHTML = myDiffVar * -1;
		time = 0;
	}
	
}
function mutiplication(){
	choice = "m";
	equal();
	while(number.length > 0) {
    	number.pop();
	}
	myMuliVar *= parseInt(document.querySelector("#interface").innerHTML);
	document.querySelector("#interface").innerHTML = myMuliVar;
	
}

function show(text) {
	number.push(text);
	let sN = number.toString();
	sN = sN.replaceAll(",","");
	document.querySelector("#interface").innerHTML = parseInt(sN);
}

document.querySelectorAll("button")[0].onclick = clear;
document.querySelectorAll("button")[11].onclick = addition;
document.querySelectorAll("button")[2].onclick = division;
document.querySelectorAll("button")[7].onclick = difference;
document.querySelectorAll("button")[3].onclick = mutiplication;
document.querySelectorAll("button")[1].onclick = equal;
