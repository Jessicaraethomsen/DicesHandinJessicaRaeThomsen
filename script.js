
	var message = document.getElementById("resultScore"); // display the game result
	var playerscore = document.getElementById("playerscore"); // display the game result
	var computerscore = document.getElementById("computerscore"); // display the game result

	
	
	var d1 = document.getElementById("die1");
	var d2 = document.getElementById("die2");
	var d3 = document.getElementById("die3");
	var d4 = document.getElementById("die4");
	
	
	//DICES & PLAYER CLASS:
	
	class Dice{
		constructor(rollresult, rollresult2){ //here we are passing name of the dice
				this.rollresult = 0;
				this.rollresult2 = 0;
		}
	
	
	rollDice(){
		//funcion to rolle the dice.
		this.rollresult = Math.floor(Math.random() * 6) + 1;
		this.rollresult2 = Math.floor(Math.random() * 6) + 1;
		console.log(this.rollresult);
		console.log(this.rollresult2);
		}
	
		get score(){
			return  this.rollresult + this.rollresult2;
		}
	
		get roll1(){
		 return this.rollresult;
		}
		
		get roll2(){
			return this.rollresult2;
		}
		
}
	
	class Player extends Dice{
			constructor(type, rollresult, rollresult2){
				//refrening to the super class "Rocket"
				super(name, rollresult, rollresult2);  //super calls the constructor of the base clases
				//additional class property
				this.type = type;
				
			}
		
				//Overridding the super class method
		rollDice(){
			//keeping the functionality of the superclass
			super.rollDice();
			console.log('Player: '+ this.type); 	
		}
	}
//END OF CLASSES
	
	
//instantiating dices & Player
var Human = new Player("Human");
		Human.rollDice();
		//Human.addResult();
	    console.log(Human.score); //here is getter
	
var Computer = new Player("Computer");
		Computer.rollDice();
		//Computer.addResult();
	    console.log(Computer.score); //here is getter
		
	
	//Global Variables
	
	var s2 = Human.score;
	var s1 = Computer.score;
	var die1 = Human.roll1;
	var die2 = Human.roll2;
	var die3 = Computer.roll1;
	var die4 = Computer.roll2;
	
	
	 //testing output: feedback they worked!
	console.log('Score: '+ s1 +' Testing ' + s2);
	console.log('Human: '+ die1 +' Testing ' + die2);
	console.log('Computer: '+ die3 +' Testing ' + die4);

	
	function reset(Human, Computer){
	Computer.rollDice();
	Human.rollDice();	
	};
	
	
	
	function display(Human, Computer) {
		//give user feedback to the user...  give the displays the information.
		computerscore.innerHTML = 'Computer total: ' + s2;
		playerscore.innerHTML = 'Player total: ' + s1;
		d1.innerHTML = die1;
		d2.innerHTML = die2;
		d3.innerHTML = die3;
		d4.innerHTML = die4;
		}
	
	
	function compare(Human, Computer){	
		if(s2 === s1){
        message.innerHTML = "<span style='color:#4949ea'> TRY AGAIN A DRAW! </span>";
		 } else if(s2 > s1){
		 message.innerHTML = "<span style='color:#Ea4977'> YOU SADLY LOST </span>";
		} else if(s2 < s1){
        message.innerHTML = "<span style='color:#0BB56E'> YOUR A WINNER, BABY </span>";
				}	
			}
	
	
	compare();
	display();
	
	

	

	

	
	
	// JavaScript Document

