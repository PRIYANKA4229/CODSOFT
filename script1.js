const quizData = [
    {
        question: "What is the normal body temperature for a healthy human?",
        answers: ["35°C", "37°C", "39°C", "41°C"],
        correct: 1,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/CAPA-BLOG-03-2-1080x675.png')",
        topic: "health"
    },
    {
        question: "In which year did the first modern Olympic Games take place?",
        answers: ["1896", "1900", "1912", "1920"],
        correct: 0,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/download.jpg')",
        topic: "olympics"
    },
    {
        question: "Which flower is known as the 'Queen of Flowers'?",
        answers: ["Tulip", "Rose", "Lily", "Orchid"],
        correct: 1,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q49fhdb/images%20(4).jpg')",
        topic: "flower"
    },
    {
        question: "Which gas is most responsible for global warming?",
        answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/download%20(1).jpg')",
        topic: "environment"
    },
    {
        question: "Which is the smallest country in the world?",
        answers: ["Monaco", "Malta", "Vatican City", "San Marino"],
        correct: 2,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/download%20(2).jpg')",
        topic: "world"
    },
    {
        question: "Who is the current President of the United States? (As of 2024)",
        answers: ["Joe Biden", "Donald Trump", "Barack Obama", "Kamala Harris"],
        correct: 0,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/images%20(1).jpg')",
        topic: "politics"
    },
    {
        question: "How many continents are there on Earth?",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/images%20(2).jpg')",
        topic: "earth"
    },
    {
        question: "Which country is known as the fashion capital of the world?",
        answers: ["New York", "Milan", "Paris", "London"],
        correct: 2,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/images%20(3).jpg')",
        topic: "fashion"
    },
    {
        question: "What is a synonym for 'happy'?",
        answers: ["Sad", "Joyful", "Angry", "Upset"],
        correct: 1,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/images.png')",
        topic: "synonym"
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
        correct: 0,
        background: "url('https://assets.onecompiler.app/42q457vx6/42q45j97e/download%20(3).jpg')",
        topic: "real stories"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");

    // Update the question and answers
    questionElement.innerText = quizData[currentQuestion].question;
    answerButtons.forEach((button, index) => {
        button.innerText = quizData[currentQuestion].answers[index];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });

    // Change background based on the topic
    document.body.style.backgroundImage = quizData[currentQuestion].background;

    // Ensure the background fits properly
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Hide the Next button initially
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedIndex) {
    const answerButtons = document.querySelectorAll(".answer");
    const correctIndex = quizData[currentQuestion].correct;

    // Highlight the correct and wrong answers
    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("wrong");
        }
    });

    // Increment score if the selected answer is correct
    if (selectedIndex === correctIndex) {
        score++;
    }

    // Show the Next button
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Remove background image before showing the result
    document.body.style.backgroundImage = "none";

    // Hide the quiz and display the result
    document.getElementById("quiz").style.display = "none";
    const resultElement = document.getElementById("result");
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
    resultElement.style.display = "block";
}

// Add event listeners for buttons
document.querySelectorAll(".answer").forEach((button, index) => {
    button.addEventListener("click", () => selectAnswer(index));
});

document.getElementById("next-btn").addEventListener("click", nextQuestion);

document.addEventListener("DOMContentLoaded", loadQuestion);
