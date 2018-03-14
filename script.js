 //Global Variables... 
 var message = document.getElementById("resultScore"); // display the game result
 var playerscore = document.getElementById("playerscore"); // display the game result
 var computerscore = document.getElementById("computerscore"); // display the game result
 var mygame = document.getElementById("button");
 var myreset = document.getElementById("reset");

 var finalComputerScore, finalHumanScore;
 //var finalComputerScore = 0;  //Variables don't need to be filled
 // var finalHumanScore= 0;// was a huge problem with local storage..


 var totalcomputerscore = document.getElementById("OutputComputerScore"); // display the game result
 var totalplayerscore = document.getElementById("OutputPlayerScore"); // display the game result

 var d1 = document.getElementById("die1");
 var d2 = document.getElementById("die2");
 var d3 = document.getElementById("die3");
 var d4 = document.getElementById("die4");



 //Here is the greet function that will give some promts to the user, as well as store the name of the player

 function greet() {
 	'use strict';
 	var name = localStorage.getItem("name");
 	if (name === null || name === "null") {
 		alert("READY FOR A NEW GAME!!!"); //some feedback for the player
 		name = prompt("What is your name?", '');
 		localStorage.setItem("name", name);
 		alert("Thanks, " + name + "...Click Okay to ROLL!!!");
 		console.log(name);
 	} else {
 		document.getElementById("player").innerHTML = name;
 	} // end greet
 } // end function  


 //setting up the two local storages with the key player, and the value of the finalplayerscore & finalcomputerscore
 if (localStorage.getItem('player') === null) {

 	localStorage.setItem('player', 0);
 	finalHumanScore = parseInt(localStorage.getItem('player'));
 	document.getElementById('OutputPlayerScore').innerHTML = 'Player: ' + finalHumanScore;
 } else {

 	finalHumanScore = parseInt(localStorage.getItem('player'));
 	document.getElementById('OutputPlayerScore').innerHTML = 'Player: ' + finalHumanScore;
 }



 if (localStorage.getItem('computer') === null) {

 	localStorage.setItem('computer', 0);
 	finalComputerScore = parseInt(localStorage.getItem('computer'));
 	document.getElementById('OutputComputerScore').innerHTML = 'Computer: ' + finalComputerScore;
 } else {

 	finalComputerScore = parseInt(localStorage.getItem('computer'));
 	document.getElementById('OutputComputerScore').innerHTML = 'Computer: ' + finalComputerScore;
 }




 //DICES & PLAYER CLASS:

 class Dice {
 	constructor() { //here we are passing name of the dice
 		this.rollresult = 0;
 		this.rollresult2 = 0;

 	}


 	rollDice() {
 		//funcion to rolle the dice.
 		this.rollresult = Math.floor(Math.random() * 6) + 1;
 		this.rollresult2 = Math.floor(Math.random() * 6) + 1;
 		//console.log(this.rollresult);
 		//console.log(this.rollresult2);
 	}


 	get roll1() {
 		return this.rollresult;
 	}

 	get roll2() {
 		return this.rollresult2;
 	}


 }

 class Player extends Dice {
 	constructor(rollresult, rollresult2) {
 		//refrening to the super class 
 		super(rollresult, rollresult2); //super calls the constructor of the base clases
 		//additional class property

 	}

 	//Overridding the super class method
 	rollDice() {
 		//keeping the functionality of the superclass
 		super.rollDice();
 		//console.log('Player: '+ this.type); 	
 	}

 	get score() {
 		return this.rollresult + this.rollresult2;
 	}



 }
 //END OF CLASSES

 //FUNCTIONS START
 function play() {
 	'use strict';

 	//new objects Human & Computer and roll the dice math.random
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
 	playerscore.innerHTML = 'Total: ' + Human.score;
 	computerscore.innerHTML = 'Total: ' + Computer.score;



 	//I KNOW THIS IS UGLY... the compare() refused to  work

 	if (Human.score === Computer.score) {
 		message.innerHTML = "<span style='color:#4949ea'> TRY AGAIN A DRAW! </span>";
 		
		//console.log("test1")

 	} else if (Human.score < Computer.score) {
 		message.innerHTML = "<span style='color:#Ea4977'> YOU SADLY LOST </span>";
 		finalComputerScore++; //ADD THE SCOREUP
 		totalcomputerscore.innerHTML = "Computer:  " + finalComputerScore;

 		localStorage.setItem('computer', finalComputerScore);

 		//console.log("test2")

 	} else if (Human.score > Computer.score) {
 		message.innerHTML = "<span style='color:#0BB56E'> YOUR A WINNER, BABY </span>";
 		finalHumanScore++; //ADD THE SCOREUP
 		totalplayerscore.innerHTML = "Player:  " + finalHumanScore;

 		localStorage.setItem('player', finalHumanScore); // REMEMBER TO ADD LOCAL STORAGE HERE
 		
		//console.log("test3")


 	}

 }


 myreset.addEventListener('click', reset); //PLAY ON CLICK
 mygame.addEventListener('click', play); //PLAY ON CLICK
 greet(); //use the prompt to get a name.
 play(); //PLAY ON LOAD


 //reset function... clears the local storage, then runs the greet, and play function
 function reset() {
 	'use strict';
	 
	localStorage.removeItem('computer');
	localStorage.removeItem('player');
	localStorage.clear();

	location.reload();
 	greet();
 	play(); //PlAY ON LOAD


 }




 // JavaScript Document
