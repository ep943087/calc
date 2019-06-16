

class SHIP{
	constructor(size,name){
		this.size = size;
		this.ship = [];
		this.print = "";
		this.player_turn=true;
		this.totalShips = 0;
		this.name = name;
	}
	setShip(){

		for(let i=0;i<this.size;i++)
		{
			let array=[];
			for(let j=0;j<this.size;j++)
			{
				array.push(0);
			}
			this.ship.push(array);
		}
	}

	setLocations(){
		let ships=6;
		let invalid = false;
		let dir = 0;
		let s = 0;
		let x = 0;
		while(ships>=3)
		{

			do{
				invalid = false;
				dir = Math.floor(1+Math.random()*4);
				x = Math.floor(1+Math.random()*(this.size*this.size));
				let r = 1;
				for(let i=0;i<this.size;i++)
				{
					for(let j=0;j<this.size;j++)
					{
						if(r==x)
						{
							s = ships;
							s--;

							if(this.ship[i][j]==3)
								invalid=true;
							while(s>0)
							{

								if(dir==1)
									i++;
								if(dir==2)
									i--;
								if(dir==3)
									j++;
								if(dir==4)
									j--;
								s--;

								if(i>=this.size||i<0||j>=this.size||j<0)
									invalid=true;
								if(invalid==false&&this.ship[i][j]==3)
									invalid=true;

							}
							

						}
						r++;
					}
				}

			}while(invalid);
			let r=1;
			for(let i=0;i<this.size;i++)
			{
				for(let j=0;j<this.size;j++)
				{
					if(r==x)
					{
						this.ship[i][j]=3;
						s = ships;
						s--;
						while(s>0)
						{
							switch(dir)
							{
								case 1:i++;this.ship[i][j]=3;break;
								case 2:i--;this.ship[i][j]=3;break;
								case 3:j++;this.ship[i][j]=3;break;
								case 4:j--;this.ship[i][j]=3;break;
							}
							s--;
						}
					}
					r++;
				}
			}
			ships--;
		}
	}

	shipToString(){

		this.print+="     ";
		let ch = 65;
		for(let i=0;i<this.size;i++)
		{
			let x = String.fromCharCode(ch);
			this.print+="    " + x;
			ch++;
		}
		this.print+="\n\n";

		let num = 1
		for(let i=0;i<this.size;i++)
		{
			this.print+="    "+num;
			num++;
			for(let j=0;j<this.size;j++)
			{
				if(this.ship[i][j]==0)
					this.print+="    .";
				if(this.ship[i][j]==1)
					this.print+="    X";
				if(this.ship[i][j]==2)
					this.print+="    O";
				if(this.ship[i][j]==3)
					this.print+="  |_|";
			}
			this.print+="\n\n";
		}
		document.querySelector("#player_ship").innerHTML = this.print;
		this.print="";
	}
	shipToString2(){

		this.print+="     ";
		let ch = 65;
		for(let i=0;i<this.size;i++)
		{
			let x = String.fromCharCode(ch);
			this.print+="    " + x;
			ch++;
		}
		this.print+="\n\n";

		let num = 1
		for(let i=0;i<this.size;i++)
		{
			this.print+="    "+num;
			num++;
			for(let j=0;j<this.size;j++)
			{
				if(this.ship[i][j]==0)
					this.print+="    .";
				if(this.ship[i][j]==1)
					this.print+="    X";
				if(this.ship[i][j]==2)
					this.print+="    O";
				if(this.ship[i][j]==3)
					this.print+="  |_|";
			}
			this.print+="\n\n";
		}
		document.querySelector("#computer_ship").innerHTML = this.print;
		this.print="";
	}
	shipsLeft(){
		this.totalShips=0;

		for(let i=0;i<this.size;i++)
		{
			for(let j=0;j<this.size;j++)
			{
				if(this.ship[i][j]==3)
				{
					this.totalShips++;
				}
			}
		}
		document.querySelector("#playerShipsLeft").innerHTML = `${this.name} ships left: ${this.totalShips}`;
	}
	shipsLeft2(){
		this.totalShips=0;
		for(let i=0;i<this.size;i++)
		{
			for(let j=0;j<this.size;j++)
			{
				if(this.ship[i][j]==3)
				{
					this.totalShips++;
				}
			}
		}
		document.querySelector("#computerShipsLeft").innerHTML = `${this.name} ships left: ${this.totalShips}`;
	}
}

class computer_guess{
	constructor(size){
		this.size = size;
		this.guesses = [];
		this.guessString = "";
		this.print = "";
		this.hit = false;
	}
	guess(p,player_turn){

		if(p.player_turn==false){
		let invalid = false;
		let x = 0;
		do{
			invalid=false;
			x = Math.floor(1+Math.random()*(this.size*this.size));
			for(let i=0;i<this.guesses.length;i++)
			{
				if(x==this.guesses[i])
					invalid=true;
			}
		} while(invalid);

		this.guesses.push(x);

		let r = 1;
		for(let i=0;i<this.size;i++)
		{
			for (let j=0;j<this.size;j++)
			{
				if(r==x)
				{
					if(p.ship[i][j]==3)
						p.ship[i][j]=1;
					else
						p.ship[i][j]=2;
				}
				r++;
			}
		}
		p.shipToString();
		p.shipsLeft();
		if(p.totalShips==0)
		{
			alert("You lose, GAME OVER");
		}
		p.player_turn=true;
		}


		else if(p.player_turn==true)
		{
			alert("It's your turn");
		}


		else{
			alert("GAME OVER");
		}
	}
}

class player_guesses{
	constructor(size){
		this.size = size;
		this.guesses = [];
		this.table = [];
		this.guess = "";
		this.print = "";
		this.invalid = false;
		this.hit = false;
	}
	setGuesses(){
		for(let i=0;i<this.size;i++)
		{
			let array=[];
			for(let j=0;j<this.size;j++)
			{
				array.push(0);
			}
			this.table.push(array);
		}
		console.log(this.table);
	}
	printGuesses(){
		this.print="";
		this.print+="     ";
		let ch = 65;
		for(let i=0;i<this.size;i++)
		{
			let x = String.fromCharCode(ch);
			this.print+="    " + x;
			ch++;
		}
		this.print+="\n\n";

		let num = 1
		for(let i=0;i<this.size;i++)
		{
			this.print+="    "+num;
			num++;
			for(let j=0;j<this.size;j++)
			{		
				if(this.table[i][j]==0)
					this.print+="    .";
				if(this.table[i][j]==1)
					this.print+="    X";
				if(this.table[i][j]==2)
					this.print+="    O";
				if(this.table[i][j]==3)
					this.print+="  |_|";
			}
			this.print+="\n\n";
		}
		return this.print;
	}
	enterGuesses(c,p){
		this.guess = document.querySelector("#player_guess").value;
		console.log(this.guess);
		this.invalid=false;
		let z = 0;

		if(p.player_turn==false)
		{
			this.invalid=true;
			alert("It's CPU's turn!");
		}

		if(this.guess.length>2||this.guess.length<=1)
		{
			alert(this.guess + " is invalid");
			this.invalid = true;
		}

		if(this.guess.charCodeAt(0)<65||this.guess.charCodeAt(0)>(64+this.size))
		{
			this.invalid = true;
			alert(this.guess + " is invalid");
		}
		if(parseInt(this.guess[1])<1||parseInt(this.guess[1])>this.size)
		{
			this.invalid = true;
			alert(this.guess + " is invalid");
		}

		if(this.invalid==false)
		{
			let x = this.guess.charCodeAt(0)-64;
			console.log("x is " +x);
			let y = parseInt(this.guess[1])-1;
			console.log("y is " +y);
			z = x + (this.size)*y;
			console.log("z is " +z);

			for(let i=0;i<this.guesses.length;i++)
			{
				if(z==this.guesses[i])
				{
					this.invalid=true;
					alert("You've already fired at " + this.guess)
				}
			}
			if(this.invalid==false)
				this.guesses.push(z);

		}

		let r = 1;
		if(this.invalid==false)
		{
			for(let i=0;i<this.size;i++)
			{
				for(let j=0;j<this.size;j++)
				{
					if(r==z)
					{
						if(c.ship[i][j]==3)
						{
							c.ship[i][j]=1;
							this.table[i][j]=1;
						}
						else
						{
							c.ship[i][j]=2;
							this.table[i][j]=2;
						}

					}
					r++;
				}
			}

			console.log(this.guess + " is valid");
			p.player_turn=false;
			//c.shipToString2();
			c.shipsLeft2();
			document.querySelector("#player_guesses").innerHTML = pg.printGuesses();
			if(c.totalShips==0)
			{
				alert("You win, GAME OVER");
			}
			
		}

	}
	
}




let size = 6;
let p = new SHIP(size,"Player");
p.setShip();
p.setLocations();
p.shipToString();
p.shipsLeft();

let c = new SHIP(size,"CPU");
c.setShip();
c.setLocations();
//c.shipToString2();
c.shipsLeft2();

let pg = new player_guesses(size);
pg.setGuesses();
document.querySelector("#player_guesses").innerHTML = pg.printGuesses();

let cg = new computer_guess(size);