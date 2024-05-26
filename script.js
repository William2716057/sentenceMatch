const questions = [
    { question: "Hello", answer: "hola", sound: "hola.mp3" },
    { question: "goodbye?", answer: "adios", sound: "adios.mp3" },
    { question: "please", answer: "por favor", sound: "por_favor.mp3" },
    { question: "thank you", answer: "gracias", sound: "gracias.mp3" },
    { question: "yes?", answer: "si", sound: "si.mp3" },
    { question: "no", answer: "no", sound: "no.mp3" }
];
//add score counter
//add score saver
//sound only version
let questionCount = 0;
const maxQuestions = 7;

let timeRemaining = 60;

//Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    //Check if countdown has ended
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        questionElement.textContent = 'time up!';
        answerElement.style.display = 'none';
        submitButton.style.display = 'none';
        resultElement.textContent = 'Game over!';
        return;
    }

    //Calculate remaining minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timer').innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Decrease the time remaining
    timeRemaining--;
}


const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadQuestion() {
    if (questionCount < maxQuestions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionElement.textContent = questions[randomIndex].question;
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
    const currentQuestionText = questionElement.textContent;
    const currentQuestion = questions.find(q => q.question === currentQuestionText);
    const correctAnswer = currentQuestion.answer;
    const correctAnswerSound = currentQuestion.sound;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';

        const audio = new Audio(correctAnswerSound);
        audio.play();
    } else {
        resultElement.textContent = `Wrong! The correct answer is '${correctAnswer}'.`;
        resultElement.style.color = 'red';
    }

    questionCount++;
    setTimeout(loadQuestion, 2000);
});

loadQuestion();