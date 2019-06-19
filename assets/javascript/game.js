//Initializing Global Vars
var wins = 0;
var losses = 0;
var score = 0;

//Gem Vars
var blue = 0;
var green = 0;
var red = 0;
var yellow = 0;
var maxScore = 0;

//Random Number between Min and Max // 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////Begin Game Logic//////////////
$(document).ready(function() {

  maxScore = getRandomInt(19, 120); // random number should be between 19 and 120
  //console.log("Max Score", maxScore);
  $("#scoreToMatch").text("Your Number to Obtain: " + maxScore);

  function resetGame() {
    score = 0;
    $("#score").text("Score So Far: " + score);
    maxScore = getRandomInt(19,120);
    console.log("Max Score", maxScore);
    $("#scoreToMatch").text("Your Number to Obtain: " + maxScore);
    blue = 0;
    green = 0;
    red = 0;
    yellow = 0;
  } //End resetGame fct
  function checkWin() {
    if (score === maxScore) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (score > maxScore) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
  } //End checkWin fct

  //Click Event for Blue Gem
  $("#one").on("click", function() {
    if (blue === 0) {
      blue = getRandomInt(1, 12);
      console.log(blue);
    }
    score += blue;
    $("#score").text("Your Total Score So Far: " + score);
    checkWin();
  });
  
  //Click Event for Green Gem
  $("#two").on("click", function() {
    if (green === 0) {
      green = getRandomInt(1, 12);
      console.log(green);
    }
    score += green;
    $("#score").text("Your Total Score So Far: " + score);
    checkWin();
  });

  //Click Event for Red Gem
  $("#three").on("click", function() {
    if (red === 0) {
      red = getRandomInt(1, 12);
      console.log(red);
    }
    score += red;
    $("#score").text("Your Total Score So Far: " + score);
    checkWin();
  });
   //Click Event for Yellow Gem
   $("#four").on("click", function() {
    if (yellow === 0) {
      yellow = getRandomInt(1, 12);
      console.log(yellow);
    }
    score += yellow;
    $("#score").text("Your Total Score So Far: " + score);
    checkWin();
  });
}); //End of Game!! :) 