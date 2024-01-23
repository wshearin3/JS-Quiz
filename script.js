console.log("Quiz")

// TODO Create main page with start button
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Mockup had timer start at 75 seconds

// There is a link in the top left to view high scores
// There is a timer in the top right counting down

// When an answer is selected wrong or correct is presented along with the next question
document.getElementById("main").style.display = "none";
document.getElementById("footer").style.display = "none";

var startQuiz = document.querySelector("#introButton")

startQuiz.addEventListener("click", function(){
timeLeft();
document.getElementById("introduction").style.display = "none";
document.getElementById("introButton").style.display = "none";
document.getElementById("main").style.display = "";
document.getElementById("footer").style.display = "";
}
)

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

// function enterInitials(){

// }
//