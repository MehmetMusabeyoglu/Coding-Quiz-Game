var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector("#countdown");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
// var buttonEl = document.querySelectorAll("button");
// console.log(buttonEl);


var timeLeft = 90;
var questionIndex = 0;
var userCorrectAnswers = 0;

var quizQuestion1 = {
    question: "Question1 ",
    options: ["1-A ", "1-B", "1-C", "1-D"],
    correctAnswer: 0
};

var quizQuestion2 = {
    question: "Question2",
    options: ["2-A ", "2-B", "2-C", "2-D"],
    correctAnswer: 0
};

var quizQuestion3 = {
    question: "Question3",
    options: ["3-A ", "3-B", "3-C", "3-D"],
    correctAnswer: 0
};

var quizQuestion4 = {
    question: "Question4",
    options: ["4-A ", "4-B", "4-C", "4-D"],
    correctAnswer: 0
};

var quizQuestion5 = {
    question: "Question5",
    options: ["5-A ", "5-B", "5-C", "5-D"],
    correctAnswer: 0
};

var questionList = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5];
//localStorage.setItem("questionListStringify", JSON.stringify(questionList));

function listenForAnswer(event) {
    var clickedButton = event.target;
    console.log(clickedButton);
    console.log(optionsEl.children[questionList[questionIndex].correctAnswer].childNodes[1]);
    if (clickedButton === optionsEl.children[questionList[questionIndex].correctAnswer].childNodes[1]) {
        userCorrectAnswers++;
        console.log("correct");
    }
    else {
        timeLeft = timeLeft - 15;
        console.log("wrong");
    }


    if (questionIndex+1 < questionList.length) {
        questionIndex++;
        renderQuestion();
    } else {
        scoreSubmission();
    }

    // console.log(element);
    // console.log("I was clicked");
}

function renderQuestion() {
    //   var questionList = JSON.parse(localStorage.getItem("questionListStringify"));
    questionEl.textContent = questionList[questionIndex].question;
    for (var i = 0; i < 4; i++) {
        optionsEl.children[i].childNodes[2].textContent = questionList[questionIndex].options[i];
        optionsEl.children[i].childNodes[1].removeEventListener("click", listenForAnswer);
        optionsEl.children[i].childNodes[1].addEventListener("click", listenForAnswer);
    }
}

function scoreSubmission() {
    quizEl.removeChild(questionEl);
    quizEl.removeChild(optionsEl);
    quizEl.removeChild(timerEl);
}


renderQuestion();

function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;

        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;

        } else {
            timerEl.textContent = '';

            clearInterval(timeInterval);

            displayResult();
        }
    }, 1000);
}

countdown();