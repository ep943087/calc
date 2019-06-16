function calc(){

	let size = parseInt(document.querySelector("#size").value);
	let valid = false;

	if(size<=50000&&size>=0)
	{
		valid = true;
	}
	else
	{
		alert("Size must be between 0 and 50000");
	}

	let array=[]
	let incorrect=false;
	let x = 0;

	if(valid)
	{
	for(let i=0;i<size;i++)
	{
		do{
			incorrect=false;
			x = Math.floor(1 + Math.random()*size);
			for(let j=0;j<array.length;j++)
			{
				if(array[j]==x)
				{
					incorrect=true;
					break;
				}
			}
		}while (incorrect);
		array.push(x);
		
	}
	console.log(array);
	document.querySelector("#random").innerHTML = array.join(" ");

	for(let last = size-1;last>0;last--)
	{
		for(let i=0;i<last;i++)
		{
			if(array[i]>array[i+1])
			{
				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}
		}
	}
	document.querySelector("#sorted").innerHTML = array.join(" ");
	}
}
