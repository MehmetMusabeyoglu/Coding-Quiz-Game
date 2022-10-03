var timerEl = document.querySelector("#countdown");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");


var timeLeft = 90;


var quizQuestion = {
    question: "Choose A B C D ",
    options: ["option A ", "option B", "option C", "option D"],
    correctAnswer: this.options[2]
};

function renderQuestion() {

    var questionList = JSON.parse(localStorage.getItem("questionListStringify"));

    questionEl.textContent = quizQuestion.question;

for (var i=0; i < 4; i++){

    optionsEl.children[i].childNodes[2].textContent = quizQuestion.options[i];
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