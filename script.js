console.log("Quiz")

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// When an answer is selected wrong or correct is presented along with the next question
document.getElementById("main").style.display = "none";
document.getElementById("footer").style.display = "none";

var startQuiz = document.querySelector("#introButton");

startQuiz.addEventListener("click", function(){
timeLeft();
document.getElementById("introduction").style.display = "none";
document.getElementById("introButton").style.display = "none";
document.getElementById("main").style.display = "";
//TODO Call questionOne function here
questionOne();
}
)
//TODO see if one score variable is needed or if multiple variables need to be generated
var score = localStorage.getItem("score");
localStorage.setItem("score", 0);

function questionOne () {


var answerOneQuestionOne = document.querySelector("#buttonOne");
var answerTwoQuestionOne = document.querySelector("#buttonTwo");
var answerThreeQuestionOne = document.querySelector("#buttonThree");
var answerFourQuestionOne = document.querySelector("#buttonFour");

answerOneQuestionOne.addEventListener("click", function(){
//console.log("right");
//console.log(score);
score++;
localStorage.setItem("score", score);
//console.log(score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
answerOneQuestionOne.textContent = "  ( )  ";
answerTwoQuestionOne.textContent = "  [ ]  ";
answerThreeQuestionOne.textContent = "  < >  ";
answerFourQuestionOne.textContent = "{ }";
document.querySelector("#questions").textContent = "What symbols should follow when a function is called?";
}
);

answerTwoQuestionOne.addEventListener("click" , function(){
//TODO add what happens when incorrect answer is chosen
//Time is subtracted
//Next question appears
//Footer displays Wrong
console.log("wrong");
console.log(score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
answerOneQuestionOne.textContent = "  ( )  ";
answerTwoQuestionOne.textContent = "  [ ]  ";
answerThreeQuestionOne.textContent = "  < >  ";
answerFourQuestionOne.textContent = "  { }  ";
document.querySelector("#questions").textContent = "What symbols should follow when a function is called?";
}
);
answerThreeQuestionOne.addEventListener("click" , function(){
 //TODO add what happens when incorrect answer is chosen
 console.log("wrong");
 document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
answerOneQuestionOne.textContent = "  ( )  ";
answerTwoQuestionOne.textContent = "  [ ]  ";
answerThreeQuestionOne.textContent = "  < >  ";
answerFourQuestionOne.textContent = "  { }  ";
document.querySelector("#questions").textContent = "What symbols should follow when a function is called?";
}
);
answerFourQuestionOne.addEventListener("click" , function(){
 //TODO add what happens when incorrect answer is chosen
 console.log("wrong");
 document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
answerOneQuestionOne.textContent = "  ( )  ";
answerTwoQuestionOne.textContent = "  [ ]  ";
answerThreeQuestionOne.textContent = "  < >  ";
answerFourQuestionOne.textContent = "  { }  ";
document.querySelector("#questions").textContent = "What symbols should follow when a function is called?";
}
);
return;
//TODO CALL QUESTION 2 Function here (write questionTwo function)       
}

var timerElement = document.querySelector(".time");

var timeRemaining = 5;

function timeLeft () {
    var timerDisplay = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = "Time Left: " + timeRemaining;

        if (timeRemaining===0) {
            clearInterval(timerDisplay);
            timerElement.textContent = "TIME'S UP!";
            //TODO Create Function that brings up dialog box to enter initials and call below
            //enterInitials();
        }
    }, 1000);
}

// function addScore (score) {
// score + 10;
// localStorage.setItem("score", score);
// }

// function enterInitials(){

// }
//