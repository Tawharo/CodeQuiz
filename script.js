//if we use querySelector, need to define class . or id #
var startBtn = document.querySelector("start");
var timeDisplay = document.querySelector("timeDisplay");
var totalScores = document.querySelector("totalScores");
var timerElementId = document.querySelector("#timer");
var container = document.querySelector(".container");

//if we use getElementById or getElementByClassName, then we don't need to define with . or hastag anymore
var startBtn = document.getElementById("startBtn")

var initialQuizTimeSec = 60;
var currentQuestion = 0;
var intervalRef;


//var initialilzeTimer = function () {
// var timer = document.getElementById(timerElementId);
// timer.innerHTML = initialQuizTimeSec;
//}

var updateTimer = function () {
    // var timer = document.getElementById(timerElementId);
    //var timeVal = parseInt(timer.innerHTML, 10);
    //if (timeVal > 0) {
    // timer.innerHTML = --timeVal;
    //}

    //starting time decreases by one
    initialQuizTimeSec--;
    //display the new time on screen everytime inititialQuizTimeSec decreases by 1
    timerElementId.textContent = initialQuizTimeSec;
    //if the time get to 0, we end the quiz by clearing the interval set on line 42 intervalRef = setInterval(updateTimer, 1000);
    if (initialQuizTimeSec <= 0) {
        endQuiz();
    }
};
//initialilzeTimer();
function endQuiz() {
    //Clearing the interval by calling the variable which the interval was assigned to
    clearInterval(intervalRef);
}

//press "Start" to startb the game and initiate questions
startBtn.addEventListener("click", function () {
    //Timer starts running, updateTimer function is called every 1 sec
    intervalRef = setInterval(updateTimer, 1000);

    //display the starting time
    timerElementId.textContent = initialQuizTimeSec;

    //hide the start button
    container.removeChild(startBtn)
});
// Inititate Questrions
var questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cats Standing Still",
            "Computer Sending Signals",
            "Cascading Simple Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },

    {
        question: "What is a tag in HTML?",
        options: [
            "A function",
            "Identifies the action of HTML",
            "Gicves a name to the line of code"
        ],
        correctAnswer: "Defines how browser will format and display"
    },

    {
        question: "JavaScript commonly interacts with programming languages?",
        options: [
            "French and Russian",
            "C++ and Java",
            "jQuery and Java",
        ],
        correctAnswer: "HTML and CSS"
    },

    {
        question: "What is the syntax for writing a function?",
        options: [
            "var = function",
            "name function(code to execute){paramter1, parameter2}",
            "function(parameter1, paramenter2) name"
        ],
        correctAnswer: "function name(parameter1, paramter2){code to execute}"
    },

    {
        question: "JavaScript has been described as...",
        options: [
            "light or dark roast.",
            "giving design to HTML.",
            "keeping the computer from crashing."
        ],
        correctAnswer: "code that animates a website."
    },
]

//When correctAnswer is clicked
//if (correctAnswer.addEventListener) {
//   for (i = 0; i < )
//}

//High score button
totalScores = addEventListener("click", function () {

});

//Timer, starts at 60sec, counts down and skips 10sec with each question answered incorrectly

//End of game, stops timer, adds score to list of scores

