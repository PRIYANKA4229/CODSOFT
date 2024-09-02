document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const question = document.getElementById("question-1").value;
        const options = [
            document.getElementById("q1-option1").value,
            document.getElementById("q1-option2").value,
            document.getElementById("q1-option3").value,
            document.getElementById("q1-option4").value,
        ];
        const correctAnswer = document.getElementById("q1-correct").value;

        const newQuiz = {
            question: question,
            options: options,
            correctAnswer: correctAnswer
        };

        // Get existing quizzes from localStorage
        let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

        // Check if there are already 10 quizzes
        if (quizzes.length >= 10) {
            alert("You can only save up to 10 quizzes.");
            return;
        }

        // Add new quiz to the array
        quizzes.push(newQuiz);

        // Save back to localStorage
        localStorage.setItem("quizzes", JSON.stringify(quizzes));

        alert("Quiz saved successfully!");

        // Optionally clear the form
        quizForm.reset();

        // Display saved quizzes
        displayQuizzes();
    });

    // Function to display saved quizzes
    function displayQuizzes() {
        const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
        const quizContainer = document.createElement("div");
        quizContainer.className = "saved-quizzes";

        quizzes.forEach((quiz, index) => {
            const quizElement = document.createElement("div");
            quizElement.className = "quiz-item";
            quizElement.innerHTML = `
                <h3>Quiz ${index + 1}</h3>
                <p><strong>Question:</strong> ${quiz.question}</p>
                <p><strong>Options:</strong></p>
                <ul>
                    ${quiz.options.map(option => `<li>${option}</li>`).join('')}
                </ul>
                <p><strong>Correct Answer:</strong> ${quiz.correctAnswer}</p>
            `;
            quizContainer.appendChild(quizElement);
        });

        // If there's already a saved quizzes container, replace it
        const existingContainer = document.querySelector(".saved-quizzes");
        if (existingContainer) {
            existingContainer.replaceWith(quizContainer);
        } else {
            document.body.appendChild(quizContainer);
        }
    }

    // Initial display of quizzes when the page loads
    displayQuizzes();
});
