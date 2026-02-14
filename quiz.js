const questions = {
    anime: [
        { question: 'Who is the main protagonist of "Naruto"?', options: ['Sasuke Uchiha','Naruto Uzumaki','Sakura Haruno','Kakashi Hatake'], answer: 'Naruto Uzumaki' },
        { question: 'In "One Piece", what is the name of the main character’s ship?', options: ['Thousand Sunny','Going Merry','Red Force','Monkey D. Luffy'], answer: 'Going Merry' }
    ],
    programming: [
        { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language','Hyperlinking Text Marking Language'], answer: 'Hyper Text Markup Language' },
        { question: 'Which language runs in the browser?', options: ['Python','JavaScript','C++','Java'], answer: 'JavaScript' }
    ],
    general: [
        { question: 'What is the capital of France?', options: ['Berlin','Madrid','Paris','Rome'], answer: 'Paris' },
        { question: 'Which planet is known as the Red Planet?', options: ['Venus','Mars','Jupiter','Saturn'], answer: 'Mars' }
    ],
    popculture: [
        { question: 'What is the name of the fictional superhero in Marvel?', options: ['Batman','Spider-Man','Superman','Green Lantern'], answer: 'Spider-Man' },
        { question: 'Which movie won Best Picture in 2020?', options: ['1917','Joker','Parasite','Once Upon a Time in Hollywood'], answer: 'Parasite' }
    ]
};

// Get category (fallback to general)
let category = localStorage.getItem('selectedCategory')?.toLowerCase() || 'general';
if(!questions[category]) category = 'general';

const quizQuestions = questions[category];
const title = document.getElementById('category-title');
title.textContent = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById('quiz-container');

function renderQuestion() {
    // Quiz finished
    if(currentQuestion >= quizQuestions.length){
        quizContainer.innerHTML = `
            <h2>Quiz Finished! 🎉</h2>
            <p>Your final score: ${score} / ${quizQuestions.length}</p>
            <button id="restart-btn">Restart Quiz</button>
        `;
        document.getElementById('restart-btn').addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            renderQuestion();
        });
        return; // stop function
    }

    const q = quizQuestions[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${q.question}</h2>
        <div id="options">
            ${q.options.map(opt => `<button class="option-btn">${opt}</button>`).join('')}
        </div>
        <p id="feedback"></p>
        <button id="next-btn">Next</button>
        <p>Score: <span id="score">${score}</span> / ${quizQuestions.length}</p>
    `;

    document.getElementById('next-btn').style.display = 'none';

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const feedback = document.getElementById('feedback');
            if(btn.textContent === q.answer){
                feedback.textContent = "Correct ✅";
                score++;
                document.getElementById('score').textContent = score;
            } else {
                feedback.textContent = `Wrong ❌ Answer: ${q.answer}`;
            }
            optionButtons.forEach(b => b.disabled = true);
            document.getElementById('next-btn').style.display = 'inline-block';
        });
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentQuestion++;
        renderQuestion(); // call again to show next question or restart
    });
}

// Start quiz
renderQuestion();
