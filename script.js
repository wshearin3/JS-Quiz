console.log("Quiz")

document.getElementById("main").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("questionNumberTwo").style.display = "none";
document.getElementById("questionNumberThree").style.display = "none";
document.getElementById("questionNumberFour").style.display = "none";
document.getElementById("questionNumberFive").style.display = "none";
document.getElementById("questionNumberSix").style.display = "none";
document.getElementById("questionNumberSeven").style.display = "none";
document.getElementById("questionNumberEight").style.display = "none";
document.getElementById("questionNumberNine").style.display = "none";
document.getElementById("questionNumberTen").style.display = "none";
document.getElementById("scoreSection").style.display = "none";
document.getElementById("warning").style.display = "none";


var startQuiz = document.querySelector("#introButton");

startQuiz.addEventListener("click", function(){
timeLeft();
document.getElementById("introduction").style.display = "none";
document.getElementById("introButton").style.display = "none";
document.getElementById("main").style.display = "";
questionOne();
}
)

var score = localStorage.getItem("score");
localStorage.setItem("score", 0);

function questionOne () {

var answerOneQuestionOne = document.querySelector("#buttonOne");
var answerTwoQuestionOne = document.querySelector("#buttonTwo");
var answerThreeQuestionOne = document.querySelector("#buttonThree");
var answerFourQuestionOne = document.querySelector("#buttonFour");

answerOneQuestionOne.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberOne").style.display = "none";
document.getElementById("questionNumberTwo").style.display = "";
}
);

answerTwoQuestionOne.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberOne").style.display = "none";
document.getElementById("questionNumberTwo").style.display = "";
}
);
answerThreeQuestionOne.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberOne").style.display = "none";
document.getElementById("questionNumberTwo").style.display = "";
}
);
answerFourQuestionOne.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberOne").style.display = "none";
document.getElementById("questionNumberTwo").style.display = "";
}
);

questionTwo ();

}
function questionTwo () {

    var answerOneQuestionTwo = document.querySelector("#buttonFive");
    var answerTwoQuestionTwo = document.querySelector("#buttonSix");
    var answerThreeQuestionTwo = document.querySelector("#buttonSeven");
    var answerFourQuestionTwo = document.querySelector("#buttonEight");
    
    answerTwoQuestionTwo.addEventListener("click", function(){
        score++;
    localStorage.setItem("score", score);
    document.getElementById("footer").style.display = "";
    document.getElementById("feedback").textContent = "Correct!";
    document.getElementById("questionNumberTwo").style.display = "none";
    document.getElementById("questionNumberThree").style.display = "";
    }
    );
    
    answerOneQuestionTwo.addEventListener("click" , function(){
    document.getElementById("footer").style.display = "";
    document.getElementById("feedback").textContent = "Incorrect!";
    document.getElementById("questionNumberTwo").style.display = "none";
    document.getElementById("questionNumberThree").style.display = "";
    }
    );
    answerThreeQuestionTwo.addEventListener("click" , function(){
    document.getElementById("footer").style.display = "";
    document.getElementById("feedback").textContent = "Wrong!";
    document.getElementById("questionNumberTwo").style.display = "none";
    document.getElementById("questionNumberThree").style.display = "";
    }
    );
    answerFourQuestionTwo.addEventListener("click" , function(){
    document.getElementById("footer").style.display = "";
    document.getElementById("feedback").textContent = "Wrong!";
    document.getElementById("questionNumberTwo").style.display = "none";
    document.getElementById("questionNumberThree").style.display = "";
    }
    );
    questionThree();
}

function questionThree() {

var answerOneQuestionThree = document.querySelector("#buttonNine");
var answerTwoQuestionThree = document.querySelector("#button10");
var answerThreeQuestionThree = document.querySelector("#button11");
var answerFourQuestionThree = document.querySelector("#button12");

answerFourQuestionThree.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberThree").style.display = "none";
document.getElementById("questionNumberFour").style.display = "";
}
);

answerOneQuestionThree.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberThree").style.display = "none";
document.getElementById("questionNumberFour").style.display = "";
}
);
answerTwoQuestionThree.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberThree").style.display = "none";
document.getElementById("questionNumberFour").style.display = "";
}
);
answerThreeQuestionThree.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberThree").style.display = "none";
document.getElementById("questionNumberFour").style.display = "";
}
);
questionFour();
}

function questionFour() {
var answerOneQuestionFour = document.querySelector("#button13");
var answerTwoQuestionFour = document.querySelector("#button14");
var answerThreeQuestionFour = document.querySelector("#button15");
var answerFourQuestionFour = document.querySelector("#button16");

answerThreeQuestionFour.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberFour").style.display = "none";
document.getElementById("questionNumberFive").style.display = "";
}
);

answerOneQuestionFour.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberFour").style.display = "none";
document.getElementById("questionNumberFive").style.display = "";
}
);
answerTwoQuestionFour.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberFour").style.display = "none";
document.getElementById("questionNumberFive").style.display = "";
}
);
answerFourQuestionFour.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberFour").style.display = "none";
document.getElementById("questionNumberFive").style.display = "";
}
);
questionFive();
}

function questionFive(){
var answerOneQuestionFive = document.querySelector("#button17");
var answerTwoQuestionFive = document.querySelector("#button18");
var answerThreeQuestionFive = document.querySelector("#button19");
var answerFourQuestionFive = document.querySelector("#button20");

answerThreeQuestionFive.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberFive").style.display = "none";
document.getElementById("questionNumberSix").style.display = "";
}
);

answerOneQuestionFive.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberFive").style.display = "none";
document.getElementById("questionNumberSix").style.display = "";
}
);
answerTwoQuestionFive.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberFive").style.display = "none";
document.getElementById("questionNumberSix").style.display = "";
}
);
answerFourQuestionFive.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberFive").style.display = "none";
document.getElementById("questionNumberSix").style.display = "";
}
);
questionSix();
}

function questionSix (){
var answerOneQuestionSix = document.querySelector("#button21");
var answerTwoQuestionSix = document.querySelector("#button22");
var answerThreeQuestionSix = document.querySelector("#button23");
var answerFourQuestionSix = document.querySelector("#button24");

answerOneQuestionSix.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberSix").style.display = "none";
document.getElementById("questionNumberSeven").style.display = "";
}
);

answerTwoQuestionSix.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberSix").style.display = "none";
document.getElementById("questionNumberSeven").style.display = "";
}
);
answerThreeQuestionSix.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberSix").style.display = "none";
document.getElementById("questionNumberSeven").style.display = "";
}
);
answerFourQuestionSix.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberSix").style.display = "none";
document.getElementById("questionNumberSeven").style.display = "";
}
);
questionSeven();
}

function questionSeven(){
var answerOneQuestionSeven = document.querySelector("#button25");
var answerTwoQuestionSeven = document.querySelector("#button26");
var answerThreeQuestionSeven = document.querySelector("#button27");
var answerFourQuestionSeven = document.querySelector("#button28");

answerFourQuestionSeven.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberSeven").style.display = "none";
document.getElementById("questionNumberEight").style.display = "";
}
);

answerOneQuestionSeven.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberSeven").style.display = "none";
document.getElementById("questionNumberEight").style.display = "";
}
);
answerTwoQuestionSeven.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberSeven").style.display = "none";
document.getElementById("questionNumberEight").style.display = "";
}
);
answerThreeQuestionSeven.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberSeven").style.display = "none";
document.getElementById("questionNumberEight").style.display = "";
}
);
questionEight();
}

function questionEight(){
var answerOneQuestionEight = document.querySelector("#button29");
var answerTwoQuestionEight = document.querySelector("#button30");
var answerThreeQuestionEight = document.querySelector("#button31");
var answerFourQuestionEight = document.querySelector("#button32");

answerTwoQuestionEight.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberEight").style.display = "none";
document.getElementById("questionNumberNine").style.display = "";
}
);

answerOneQuestionEight.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberEight").style.display = "none";
document.getElementById("questionNumberNine").style.display = "";
}
);
answerThreeQuestionEight.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberEight").style.display = "none";
document.getElementById("questionNumberNine").style.display = "";
}
);
answerFourQuestionEight.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberEight").style.display = "none";
document.getElementById("questionNumberNine").style.display = "";
}
);
questionNine();
}

function questionNine() {
var answerOneQuestionNine = document.querySelector("#button33");
var answerTwoQuestionNine = document.querySelector("#button34");
var answerThreeQuestionNine = document.querySelector("#button35");
var answerFourQuestionNine = document.querySelector("#button36");

answerThreeQuestionNine.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberNine").style.display = "none";
document.getElementById("questionNumberTen").style.display = "";
}
);

answerOneQuestionNine.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberNine").style.display = "none";
document.getElementById("questionNumberTen").style.display = "";
}
);
answerTwoQuestionNine.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberNine").style.display = "none";
document.getElementById("questionNumberTen").style.display = "";
}
);
answerFourQuestionNine.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberNine").style.display = "none";
document.getElementById("questionNumberTen").style.display = "";
}
);
questionTen();
}

function questionTen() {
var answerOneQuestionTen = document.querySelector("#button37");
var answerTwoQuestionTen = document.querySelector("#button38");
var answerThreeQuestionTen = document.querySelector("#button39");
var answerFourQuestionTen = document.querySelector("#button40");

answerTwoQuestionTen.addEventListener("click", function(){
score++;
localStorage.setItem("score", score);
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Correct!";
document.getElementById("questionNumberTen").style.display = "none";
timeRemaining = 1;
}
);

answerOneQuestionTen.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Incorrect!";
document.getElementById("questionNumberTen").style.display = "none";
timeRemaining = 1;
}
);
answerThreeQuestionTen.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberTen").style.display = "none";
timeRemaining = 1;
}
);
answerFourQuestionTen.addEventListener("click" , function(){
document.getElementById("footer").style.display = "";
document.getElementById("feedback").textContent = "Wrong!";
document.getElementById("questionNumberTen").style.display = "none";
// initialPrompt = prompt("Pleae enter initials to save your score.");
// localStorage.setItem("initials", initialPrompt);
timeRemaining = 1;
}
);
}


//TIMER FUNCTIONS
var timerElement = document.querySelector(".time");

var timeRemaining = 20;

function timeLeft (score) {
    var timerDisplay = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = "Time Left: " + timeRemaining;

        if (timeRemaining ===0){
           clearInterval(timerDisplay);
           timerElement.textContent = "TIME'S UP!"
            var initialPrompt = prompt("Please enter initials to save your score.");
            localStorage.setItem("initials", initialPrompt);
            console.log(initialPrompt);
            var tials = localStorage.getItem("initials");
            var scr = localStorage.getItem("score");
            document.getElementById("highScores").textContent = "Initials - Score: " + tials + " - " + scr;
            document.getElementById("scoreSection").style.display = "";
            document.getElementById("main").style.display = "none";
            document.getElementById("footer").style.display = "none";
        } 
        
    }, 1000);
}

var scoreBoard = document.querySelector("#highScoreButton");


scoreBoard.addEventListener("click", function(){
document.getElementById("main").style.display = "none";
document.getElementById("footer").style.display = "none";
document.getElementById("scoreSection").style.display = "";
// document.getElementById("highScoreButton").style.display = "none";
//document.getElementById("hideScoreButton").style.display = "";
}
);

var hideScoreBoard = document.querySelector("#hideScoreButton");

hideScoreBoard.addEventListener("click", function(){
document.getElementById("highScoreButton").style.display = "";
document.getElementById("scoreSection").style.display = "none";
document.getElementById("warning").style.display = "";
document.getElementById("introduction").style.display = "none";
document.getElementById("introButton").style.display = "none";
}
);


