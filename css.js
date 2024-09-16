let questions = [
    {
        question: "What does the `color` property in CSS do?",
        options: ["Changes the background color", "Changes the text color", "Changes the border color", "Changes the font size"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: ["background", "bgcolor", "color", "background-color"],
        answer: 3
    },
    {
        question: "How do you select an element with the class 'container' in CSS?",
        options: [".container", "#container", "container", "*container"],
        answer: 0
    },
    {
        question: "What is the CSS property to control the space inside an element's border?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 1
    },
    {
        question: "Which CSS property is used to set the width of an element?",
        options: ["height", "width", "size", "length"],
        answer: 1
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
    document.getElementById("quiz-head").innerHTML = "CSS Quiz";
    document.getElementById("quiz-choices").style.display = "block";
    document.getElementById("restart-button").style.display = "none";
    startQuiz();
});
