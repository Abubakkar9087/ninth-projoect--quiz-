let questions = [
    {
        question: "What does the `title` tag define in an HTML document?",
        options: ["The title of the webpage", "The main heading", "The footer text", "The body content"],
        answer: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["a", "link", "href", "nav"],
        answer: 0
    },
    {
        question: "What is the correct way to add an image in HTML?",
        options: ["img src='image.jpg'", "image href='image.jpg'", "picture src='image.jpg'", "img href='image.jpg'"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["ul", "ol", "li", "list"],
        answer: 0
    },
    {
        question: "Which of the following is the correct syntax to make a text bold in HTML?",
        options: ["bold", "b", "strong", "em"],
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
    document.getElementById("quiz-head").innerHTML = "HTML Quiz";
    document.getElementById("quiz-choices").style.display = "block";
    document.getElementById("restart-button").style.display = "none";
    startQuiz();
});
