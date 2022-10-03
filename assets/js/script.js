var timerEl = document.querySelector("#countdown");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");


var timeLeft = 90;





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