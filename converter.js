

function lengthConvert(){
	let original = parseFloat(document.querySelector("#before").value);
	let conversion = 0.0;

	let unit1 = document.querySelector("#unit1").value;
	let unit2 = document.querySelector("#unit2").value;

	let me = 0.0;  //meter equivalent

	switch(unit1)
	{
		case "meter": 
			me = original;
			break;
		case "kilometer": 
			me = original * Math.pow(10,3);
			break;
		case "centimeter":
			me = original * Math.pow(10,-2)
			break;
		case "millimeter":
			me = original * Math.pow(10,-3);
			break;
		case "nanometer":
			me = original * Math.pow(10,-9);
			break;
		case "mile":
			me = original * 1609.34;
			break;
		case "yard":
			me = original * .9144;
			break;
		case "foot":
			me = original * .3048;
			break;
		case "inch":
			me = original * .0254;
			break;
		case "lightYear":
			me = original * 9.461*Math.pow(10,15);
			break;
	}

	switch(unit2)
	{
		case "meter":
			conversion = me;
			break;
		case "kilometer":
			conversion = me * Math.pow(10,-3);
			break;
		case "centimeter":
			conversion = me * Math.pow(10,2);
			break;
		case "millimeter":
			conversion = me * Math.pow(10,3);
			break;
		case "nanometer":
			conversion = me * Math.pow(10,9);
			break;
		case "mile":
			conversion = me * .000621371;
			break;
		case "yard":
			conversion = me * 1.09361;
			break;
		case "foot":
			conversion = me * 3.28084;
			break;
		case "inch":
			conversion = me * 39.3701;
			break;
		case "lightYear":
			conversion = me * 1.057 * Math.pow(10,-16);		
			break;
	}	

	conversion = Math.floor(conversion * 100000)/100000;

	document.querySelector("#after").innerHTML = conversion;

}

function timeConvert(){
	let original = parseFloat(document.querySelector("#before2").value);
	let conversion = 0.0;

	let unit1 = document.querySelector("#t-unit1").value;
	let unit2 = document.querySelector("#t-unit2").value;

	let he = 0.0;  // hour equivalent

	switch(unit1)
	{
		case "nanosecond": 
			he = original * 2.7778 * Math.pow(10,-13);
			break;
		case "microsecond": 
			he = original * 2.7778 * Math.pow(10,-10);
			break;
		case "millisecond":
			he = original * 2.7778 * Math.pow(10,-7);
			break;
		case "second":
			he = original * 2.77778 * Math.pow(10,-4);
			break;
		case "minute":
			he = original * .0166667;
			break;
		case "hour":
			he = original;
			break;
		case "day":
			he = original *24;
			break;
		case "week":
			he = original * 168;
			break;
		case "month":
			he = original * 730.001;
			break;
		case "year":
			he = original * 8760;
			break;
		case "decade":
			he = original * 87600;
			break;
		case "century":
			he = original * 876000;
			break;

	}

	switch(unit2)
	{
		case "nanosecond":
			conversion = he * 3.6 * Math.pow(10,12);
			break;
		case "microsecond":
			conversion = he * 3.6 * Math.pow(10,9);
			break;
		case "millisecond":
			conversion = he * 3.6 * Math.pow(10,6);
			break;
		case "second":
			conversion = he * 3600;
			break;
		case "minute":
			conversion = he * 60;
			break;
		case "hour":
			conversion = he;
			break;
		case "day":
			conversion = he * .0416667;
			break;
		case "week":
			conversion = he * .00595238;
			break;
		case "month":
			conversion = he * .00136986;
			break;
		case "year":
			conversion = he * .000114115;		
			break;
		case "decade":
			conversion = he * .0000114115;
		case "century":
			conversion = he * .00000114115;
	}

	conversion = Math.floor(conversion*100000)/100000;

	document.querySelector("#after2").innerHTML = conversion;
}