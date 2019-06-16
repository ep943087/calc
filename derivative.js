
var apo ="'";

class findDerivate{
	constructor(signBase,base,x,u,signPow,pow){
		/*
		if(pow==1)
		{
			pow = "";
			u = "";
			signPow = "";
		}
		if(pow==0)
		{
			pow = "";
			u = "";
			signPow = "";
			x = "";
		}
		*/
		this.signBase = signBase;
		if(base!="")
			this.base = parseFloat(signBase + base);
		else
			this.base=1;

		this.x = x;
		this.u = u;
		this.signPow = signPow;
		if(u!="")
			this.pow = parseFloat(signPow + pow);
		else
			this.pow="";

		
	}
	setFunction(){
		if(this.u!=""&&this.x!="")
		{
			this.base *= this.pow;
			this.pow -=1;
		}
		else if(this.u==""&&this.x!="")
		{
			this.x="";
		}
		else if(this.x=="")
		{
			this.base = 0;
		}
		if(this.base>=0)
		{
			this.signBase="+";
		}
		else
		{
			this.signBase="-";
			this.base*=-1;
		}
		if(this.pow!=""&&this.pow>=0)
		{
			this.signPow="+";
		}
		else if(this.pow!=""&&this.pow<0)
		{
			this.signPow="-";
			this.pow*=-1;
		}

		if(this.signPow=="+")
			this.signPow="";
		if(this.pow==1)
		{
			this.pow="";
			this.u = "";
		}
		if(this.base==0)
		{
			this.base="";
			this.pow="";
			this.x ="";
			this.u="";
			this.signPow="";
			this.signBase="";
		}
	}
}

function deriv(num){

	let fun = 0;

	if(num==1)
	{
		fun = document.querySelector("#function").value;
		apo="'";
	}
	else
	{
		document.querySelector("#function").innterHTML = "";
		document.querySelector("#function").innerHTML = document.querySelector("#derivative").value;
		fun = document.querySelector("#derivative").value;
		document.querySelector("#derivative").innterHTML = "";
		apo+="'";
	}

	let base = "";
	let pow = "";
	let x = "";
	let y = 0;
	let signBase = '+';
	let signPow = "";
	let u = "";
	let signPowSearch=false;
	let signBaseFound=false;
	let powSearch=false;
	let functions = [];

	let limit = 0;

	if(num==2)
	{
		limit=fun.indexOf("=");
	}

	for(let i=limit;i<fun.length;i++)
	{
		y=fun.charCodeAt(i);
		y=parseInt(y);

		if(fun[i]=='x')
		{
			signBaseFound=true;
			x = fun[i];
		}

		if(y>=46&&y<=57&&signPowSearch==false&&powSearch==false)
		{
			signBaseFound=true;
			base+=String.fromCharCode(y);
		}

		if(y>=46&&y<=57&&(signPowSearch==true||powSearch==true))
		{
			pow+=String.fromCharCode(y);
			signPowSearch=false;
			powSearch=true;
		}

		if(fun[i]=='^')
		{
			u = fun[i];
			signPow = "+";
			signPowSearch=true;
		}

		if((fun[i]=="+"||fun[i]=="-")&&signPowSearch==false&&signBaseFound==false)
		{
			signBase = fun[i];
		}

		if((fun[i]=="+"||fun[i]=="-")&&signPowSearch==true&&signBaseFound==true)
		{	
			signPow=fun[i];
		}

		if(((fun[i]=="+"||fun[i]=="-")&&signPowSearch==false&&signBaseFound==true)||i==fun.length-1)			
		{
			let obj = new findDerivate(signBase,base,x,u,signPow,pow);
			base = "";
			pow = "";
			x = "";
			if(fun[i]=="-")
				signBase = fun[i];
			else
				signBase = "+";
			signPow = "";
			u = "";
			signPowSearch = false;
			signBaseFound=false;
			powSearch = false;
			functions.push(obj);
		}
	}


	//adding coefficents with same pow

	for(let i=0;i<functions.length;i++)
	{
		for(let j=0;j<functions.length;j++)
		{
			if(i==j)
				j++;
			if(j==functions.length)
				break;
			if(functions[i].pow==functions[j].pow)
			{

				if(functions[i].x!=""&&functions[j].x!="")
				{	
					functions[i].base+=functions[j].base;

					functions[j].signBase = "";
					functions[j].base = "";
					functions[j].x = "";
					functions[j].u = "";
					functions[j].signPow = "";
					functions[j].pow = "";
				}
			
				if(functions[i].x==""&&functions[j].x=="")
				{
					functions[j].signBase = "";
					functions[j].base = "";
					functions[j].x = "";
					functions[j].u = "";
					functions[j].signPow = "";
					functions[j].pow = "";
				}
			}
		}
	}

	//sorting
	
	
	for(let last=functions.length-1;last>0;last--)
	{
		for(let i=0;i<last;i++)
		{
			if(functions[i].pow<functions[i+1].pow)
			{
				let temp = functions[i];
				functions[i] = functions[i+1];
				functions[i+1] = temp;
			}
		}
	}

	for(let i=0;i<functions.length;i++)
	{
		functions[i].setFunction(); // Differentiating everything
	}

	let print = "";

	for(let i=0;i<functions.length;i++)
	{
		console.log(functions[i].signBase + functions[i].base + 
					functions[i].x + functions[i].u + functions[i].signPow+
					functions[i].pow);

		if(i==0&&functions[i].signBase=="-")
			print+= " - ";
		if(i!=0&&functions[i].signBase!="")
			print+= " " + functions[i].signBase + " ";

		print+=`${functions[i].base}${functions[i].x}${functions[i].u}${functions[i].signPow}${functions[i].pow}`;
	}	

	if(print=="")
		print+="0";

	console.log(print);
	if(apo.length<4)
		document.querySelector("#derivative").innerHTML = "y"+apo+" = "+ print;
	else
		document.querySelector("#derivative").innerHTML = "y^"+apo.length+ " = " + print;
}