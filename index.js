

function calc(){
	let a = parseFloat(document.querySelector("#num1").value);
	let b = parseFloat(document.querySelector("#num2").value);
	let op = document.querySelector("#operator").value;
	let result = 0.0;
	let resultText="";

	switch(op)
	{
		case "add":
			result=a+b*1.0;
			resultText=`${a} + ${b} = ${result}`;
			document.querySelector("#result").innerHTML = (resultText);
			break;
		case "sub":
			result=a-b*1.0;
			resultText=`${a} - ${b} = ${result}`;
			document.querySelector("#result").innerHTML = (resultText);
			break;
		case "mul":
			result=a*b*1.0;
			resultText=`${a} * ${b} = ${result}`;
			document.querySelector("#result").innerHTML = (resultText);
			break;
		case "div":
			result=a/b*1.0;
			resultText=`${a} / ${b} = ${result}`;
			document.querySelector("#result").innerHTML = (resultText);
			break;
	}
	console.log(resultText);
}

