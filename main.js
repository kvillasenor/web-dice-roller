/*This project was made with the help of ChatGPT and Google AI OVerview. All parts of the code were tested and 
understood.*/

/*rollDice() function rolls a random number for each dice and will display the number. References id's in html file */
function rollDice() {
    document.getElementById("die1").value = randomDie();
    document.getElementById("die2").value = randomDie();
    document.getElementById("die3").value = randomDie();
    document.getElementById("die4").value = randomDie();
    document.getElementById("die5").value = randomDie();
}

/*generates a random number for each dice from 1 to 6*/
function randomDie() {
    return Math.floor(Math.random() * 6) + 1;
}