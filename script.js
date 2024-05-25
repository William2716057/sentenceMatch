const questions = [
    { question: "Hello", answer: "hola" },
    { question: "goodbye?", answer: "adios" },
    { question: "please", answer: "por favor" },
    { question: "thank you", answer: "gracias" },
    { question: "yes?", answer: "si" },
    { question: "no", answer: "no" }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        answerElement.value = '';
        resultElement.textContent = '';
    } else {
        questionElement.textContent = 'You completed the game!';
        answerElement.style.display = 'none';
        submitButton.style.display = 'none';
        resultElement.textContent = 'Congratulations!';
    }
}

submitButton.addEventListener('click', () => {
    const userAnswer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        currentQuestionIndex++;
    } else {
        resultElement.textContent = `Wrong! The correct answer is '${correctAnswer}'.`;
        resultElement.style.color = 'red';
    }

    setTimeout(loadQuestion, 2000);
});

loadQuestion();