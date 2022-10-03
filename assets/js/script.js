var timerEl = document.querySelector("#countdown");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");


var timeLeft = 90;


var quizQuestion1 = {
    question: "Question1 ",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

var quizQuestion2 = {
    question: "Question2",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

var quizQuestion3 = {
    question: "Question3",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

var quizQuestion4 = {
    question: "Question4",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

var quizQuestion5 = {
    question: "Question5",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

var questionList = [quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5];
localStorage.setItem("questionListStringify", JSON.stringify(questionList));

function renderQuestion() {

    var questionList = JSON.parse(localStorage.getItem("questionListStringify"));

    questionEl.textContent = questionList[3].question;

    for (var i = 0; i < 4; i++) {

        optionsEl.children[i].childNodes[2].textContent = questionList[1].options[i];
    }
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