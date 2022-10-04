// Called functions from html document
var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector("#countdown");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
var startEl = document.querySelector("#start");
var hiddenEl = document.querySelector(".hidden");
var highscoresEl = document.querySelector("#highscores");
var userInput = document.querySelector("#highscore-text");
var infoEl = document.querySelector("#info");
var submitButtonEl = document.querySelector("#scoresubmit");
var scoreBoardEl = document.querySelector("#scoreboard");

// Global variables
var timeLeft = 150;
var questionIndex = 0;
var userCorrectAnswers = 0;

// Scoreboard list function
var scoreBoardList = [];
if(localStorage.getItem("scoreBoardStringify") === null){
    localStorage.setItem("scoreBoardStringify", JSON.stringify(scoreBoardList));
}

// Quiz questions
var quizQuestion1 = {
    question: "Which of the following is used to make a static website into a dynamic one?",
    options: [" html", " http", " javascript", " css"],
    correctAnswer: 2
};

var quizQuestion2 = {
    question: "Which of the following is a semantic html element?",
    options: [" <header>", " <span>", " <div>", " None of the above"],
    correctAnswer: 0
};

var quizQuestion3 = {
    question: "Which of the following prints 'Hello world!' in the JavaScript console?",
    options: [" print('Hello world!');", " console.log(Hello world!)", " console.log('Hello world!');", " print(Hello world!)"],
    correctAnswer: 2
};

var quizQuestion4 = {
    question: "How do you find the minimum of x and y using JavaScript?",
    options: [" min(x,y); ", " Math.min(x,y)", " Math.min(xy)", " min(xy);"],
    correctAnswer: 1
};

var quizQuestion5 = {
    question: "JavaScript is a _____-side programming language.",
    options: [" client ", " server", " style", " both client and server"],
    correctAnswer: 3
};

// Make invisible my submit button and user input section when user looking to questions
hiddenEl.style.display = "none";
highscoresEl.style.display = "none";
userInput.style.display = "none";

// Starting quiz 
function startQuiz() {
    startEl.addEventListener("click", function () {
        quizEl.removeChild(startEl);
        quizEl.removeChild(infoEl);
        hiddenEl.style.display = "block";
        renderQuestion();
        timeLeft = 150;
    });
}

// All questions var list
var questionList = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5];
//localStorage.setItem("questionListStringify", JSON.stringify(questionList));

// Event listener for choosing answer
function listenForAnswer(event) {
    var clickedButton = event.target;
    console.log(clickedButton);
    console.log(optionsEl.children[questionList[questionIndex].correctAnswer].childNodes[1]);



    if (clickedButton === optionsEl.children[questionList[questionIndex].correctAnswer].childNodes[1]) {
        userCorrectAnswers++;
        // clickedButton.style.background = "green";
        // console.log( clickedButton.style.background);     
        alert("CORRECT");
        // console.log("correct");
        //return clickedButton.style.background;
    }
    else {
        timeLeft = timeLeft - 15;
        //  clickedButton.style.background = "red";
        alert("FALSE");
        // console.log("wrong");
        //return clickedButton.style.background;
    }

    if (questionIndex + 1 < questionList.length) {
        questionIndex++;
        renderQuestion();
    } else {
        hiddenEl.style.display = "none";
        scoreSubmission();
    }

}

// Call questions with order
function renderQuestion() {
    //   var questionList = JSON.parse(localStorage.getItem("questionListStringify"));
    questionEl.textContent = questionList[questionIndex].question;
    for (var i = 0; i < 4; i++) {
        optionsEl.children[i].childNodes[2].textContent = questionList[questionIndex].options[i];
        optionsEl.children[i].childNodes[1].removeEventListener("click", listenForAnswer);
        optionsEl.children[i].childNodes[1].addEventListener("click", listenForAnswer);
        // optionsEl.children[i].childNodes[1].style.background = "bisque";
    }
}

// Score submisson part for user
function scoreSubmission() {
    var score = timeLeft + userCorrectAnswers * 20;
    alert("Your score is: " + score);
    highscoresEl.style.display = "block";
    userInput.style.display = "block";
    submitButtonEl.addEventListener("click", function (event) {
        event.preventDefault();
        var scoreEntry = {
            userName: userInput.value.trim(),
            userScore: score
        };
        scoreBoardList = JSON.parse(localStorage.getItem("scoreBoardStringify"));
        scoreBoardList.push(scoreEntry);
        console.log(scoreBoardList);
        localStorage.setItem("scoreBoardStringify", JSON.stringify(scoreBoardList));
        console.log(scoreBoardList);
        scoreBoardDisplay();
    });
}

// tore submitted name and value, then shows to user
function scoreBoardDisplay() {
    var storedScoreBoard = JSON.parse(localStorage.getItem("scoreBoardStringify"));
    // Render a new li for each past user with their score
    for (var i = 0; i < storedScoreBoard.length; i++) {
        var storedScoreEntry = storedScoreBoard[i];

        var li = document.createElement("li");
        li.textContent = storedScoreEntry.userName + "'s score is ==> " + storedScoreEntry.userScore;
        li.setAttribute("data-index", i);

        scoreBoardEl.appendChild(li);
    }
}


// renderQuestion();

// Timer function which execute every 1 sec
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;

        } else {
            timerEl.textContent = 'Time is up!';

            clearInterval(timeInterval);

            scoreSubmission();
        }
    }, 1000);
}

countdown();
startQuiz();