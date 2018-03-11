

	class Dice{
		constructor(){ //here we are passing name of the dice
				this.rollresult = 0;
				this.rollresult2 = 0;
			
		}
	
	
	rollDice(){
		//funcion to rolle the dice.
		this.rollresult = Math.floor(Math.random() * 6) + 1;
		this.rollresult2 = Math.floor(Math.random() * 6) + 1;
		//console.log(this.rollresult);
		//console.log(this.rollresult2);
		}

		
		get roll1(){
		 return this.rollresult;
		}
		
		get roll2(){
			return this.rollresult2;
		}
		
		
}
	
	class Player extends Dice{
			constructor(rollresult, rollresult2){
				//refrening to the super class 
				super(rollresult,rollresult2);  //super calls the constructor of the base clases
				//additional class property
				
			}
		
				//Overridding the super class method
		rollDice(){
			//keeping the functionality of the superclass
			super.rollDice();
			//console.log('Player: '+ this.type); 	
		}
		
		get score(){
			return  this.rollresult + this.rollresult2;
		}
	
		
	}


var myGame = (function () {
	// private variables
	'use strict';

    var message = document.getElementById("resultScore"); // display the game result
	var playerscore = document.getElementById("playerscore"); // display the game result
	var computerscore = document.getElementById("computerscore"); // display the game result
	var mygame = document.getElementById("button");
	var myreset = document.getElementById("reset");
  

	var totalcomputerscore = document.getElementById("OutputComputerScore"); // display the game result
	var totalplayerscore = document.getElementById("OutputPlayerScore"); // display the game result
	
	var d1 = document.getElementById("die1");
	var d2 = document.getElementById("die2");
	var d3 = document.getElementById("die3");
	var d4 = document.getElementById("die4");

    var finalComputerScore = 0;
    var finalHumanScore = 0;
	
	
	// functions
	var compare, greet, roll;
	
	roll = function () {
		var Human = new Player("Human");
		Human.rollDice();
	
		var Computer = new Player("Computer");
		Computer.rollDice();
		
		//console.log(Human.score); //here is getter
	   // console.log(Computer.score); //here is getter
	
		//output the results
		d3.innerHTML = Human.roll1;
		d4.innerHTML = Human.roll2;
		d1.innerHTML = Computer.roll1;
		d2.innerHTML = Computer.roll2;
		
		//output the score
		playerscore.innerHTML = 'Total: '  + Human.score;
	    computerscore.innerHTML= 'Total: ' + Computer.score;
		
	};
	
	
	

	// private functions
	
		compare = function () {
		
			if(Human.score=== Computer.score){
        message.innerHTML = "<span style='color:#4949ea'> TRY AGAIN A DRAW! </span>";
			//console.log("test1")

		 } else if(Human.score < Computer.score){
		 message.innerHTML = "<span style='color:#Ea4977'> YOU SADLY LOST </span>";
		finalComputerScore++; //ADD THE SCOREUP
			 //console.log("test2")
		 
		} else if(Human.score > Computer.score){
        message.innerHTML = "<span style='color:#0BB56E'> YOUR A WINNER, BABY </span>";
		finalHumanScore++; //ADD THE SCOREUP


				}

		totalcomputerscore.innerHTML = "Computer:  " + finalComputerScore;
	    totalplayerscore.innerHTML = "player:  " + finalHumanScore;
storeddata();


			}	
		
	};


	display = function () {
	
function greet(){
	'use strict';
    var name = localStorage.getItem("name");
    if (name === null || name === "null"){
     alert("READY FOR A NEW GAME!!!");
     name = prompt("What is your name?", '');
      localStorage.setItem("name", name);
      alert("Thanks, "+ name + "...Click Okay to ROLL!!!");
      console.log(name);
    } else {
     document.getElementById("player").innerHTML = name;
    } // end greet
  } // end function 
	};




	return {
		// public function
		play: function () {
			greet();
			compare();
			
		}
	};

	// gameModule end //
})();// JavaScript Document