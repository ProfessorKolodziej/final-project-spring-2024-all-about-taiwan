const quizData = [
	{
		question: 'What is the capital of Taiwan?',
		options: ['Miaoli', 'Taichung', 'Taipei', 'Keelung'],
		answer: 'Taipei'
	},
	{
		question: 'Which of these scenic attractions is NOT located in Taiwan?',
		options: ['Taroko Gorge', 'West Lake', 'Sun Moon Lake', 'Alishan'],
		answer: 'West Lake'
	},
	{
		question: 'Where is Alishan located?',
		options: ['Yunlin', 'Hsinchu', 'Chiayi', 'Pintung'],
		answer: 'Chiayi'
	},
	{
		question: 'Which of these regions is know as the "Taiwanese Silicon Valley"?',
		options: ['Nantou', 'New Taipei', 'Taitung', 'Hsinchu'],
		answer: 'Hsinchu'
	},
	{
		question: 'Which of these regions is at the most southern point of Taiwan?',
		options: ['Pintung', 'Miaoli', 'Zhanghua', 'Hsinchu City'],
		answer: 'Pintung'
	}
];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
	const currentQuizData = quizData[currentQuestion];
	questionElement.innerText = currentQuizData.question;
	optionsContainer.innerHTML = '';

	currentQuizData.options.forEach((option) => {
		const optionElement = document.createElement('div');
		optionElement.classList.add('option');
		optionElement.innerText = option;
		optionElement.addEventListener('click', () => {
			checkAnswer(option);
		});
		optionsContainer.appendChild(optionElement);
	});
}

function checkAnswer(selectedOption) {
	const currentQuizData = quizData[currentQuestion];

	if (selectedOption === currentQuizData.answer) {
		score++;
	}

	currentQuestion++;

	if (currentQuestion < quizData.length) {
		loadQuestion();
	} else {
		showResult();
	}
}

function showResult() {
	resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
	submitButton.style.display = 'none';
}

loadQuestion();
