let questions = [
    {
        question: "What is the correct syntax to create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "myFunction function()", "create function()"],
        answer: 1
    },
    {
        question: "Which of the following is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "What is the result of `typeof null` in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: 2
    },
    {
        question: "How can you add a comment in JavaScript?",
        options: [" 'This is a comment'", "// This is a comment", "# This is a comment", "' This is a comment"],
        answer: 1
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        answer: 3
    }
];

let currentQuestion = 0;
let timer = 15;
let score = 0;
let intervalId;

document.getElementById("start-button").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("quiz-choices").style.display = "block";
    document.getElementById("question-text").innerHTML = questions[currentQuestion].question;
    document.getElementById("option1-text").innerHTML = questions[currentQuestion].options[0];
    document.getElementById("option2-text").innerHTML = questions[currentQuestion].options[1];
    document.getElementById("option3-text").innerHTML = questions[currentQuestion].options[2];
    document.getElementById("option4-text").innerHTML = questions[currentQuestion].options[3];
    intervalId = setInterval(function() {
        timer--;
        document.getElementById("timer").innerHTML = timer + " seconds";
        if (timer === 0) {
            submitAnswer();
        }
    }, 1000);
}

document.getElementById("submit").addEventListener("click", function() {
    clearInterval(intervalId);
    submitAnswer();
});

function submitAnswer() {
    let answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (answer.id === `option${questions[currentQuestion].answer + 1}`) {
            score++;
        }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        timer = 15;
        document.getElementById("question-text").innerHTML = questions[currentQuestion].question;
        document.getElementById("option1-text").innerHTML = questions[currentQuestion].options[0];
        document.getElementById("option2-text").innerHTML = questions[currentQuestion].options[1];
        document.getElementById("option3-text").innerHTML = questions[currentQuestion].options[2];
        document.getElementById("option4-text").innerHTML = questions[currentQuestion].options[3];
        intervalId = setInterval(function() {
            timer--;
            document.getElementById("timer").innerHTML = timer + " seconds";
            if (timer === 0) {
                submitAnswer();
            }
        }, 1000);
    } else {
        document.getElementById("quiz-head").innerHTML = `Quiz Complete! Your score is ${score} out of ${questions.length}`;
        document.getElementById("quiz-choices").style.display = "none";
        document.getElementById("restart-button").style.display = "block";
    }
}

document.getElementById("restart-button").addEventListener("click", function() {
    currentQuestion = 0;
    timer = 15;
    score = 0;
    document.getElementById("quiz-head").innerHTML = "JavaScript Quiz";
    document.getElementById("quiz-choices").style.display = "block";
    document.getElementById("restart-button").style.display = "none";
    startQuiz();
});
