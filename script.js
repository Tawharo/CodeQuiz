var startBtn = document.querySelector("start");
var timeDisplay = document.querySelector("timeDisplay");
var totalScores = document.querySelector("totalScores");

const initialQuizTimeSec = 60;
const timerElementId = "timer";
var currentQuestion = 0;

var initialilzeTimer = function () {
    var timer = document.getElementById(timerElementId);
    timer.innerHTML = initialQuizTimeSec;
}

var updateTimer = function () {
    var timer = document.getElementById(timerElementId);
    var timeVal = parseInt(timer.innerHTML, 10);
    if (timeVal > 0) {
        timer.innerHTML = --timeVal;
    }
};
initialilzeTimer();

//press "Start" to startb the game and initiate questions
document.getElementById("startBtn").addEventListener("click", function () {
    var intervalRef = setInterval(updateTimer, 1000);
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
totalScores = addEventListener("click", function() {

});

//Timer, starts at 60sec, counts down and skips 10sec with each question answered incorrectly

//End of game, stops timer, adds score to list of scores

