const questions = {
    anime: [
        { 
            question: 'Who is the main protagonist of "Naruto"?',
            options: ['Sasuke Uchiha','Naruto Uzumaki','Sakura Haruno','Kakashi Hatake'], 
            answer: 'Naruto Uzumaki' 
        },
        { 
            question: 'In "One Piece", what is the name of the main character’s ship?', 
            options: ['Thousand Sunny','Going Merry','Red Force','Monkey D. Luffy'], 
            answer: 'Going Merry' 
        },
        {
            question: 'Which anime features a world where people can use "Quirks"?',
            options: ['My Hero Academia','Attack on Titan','Demon Slayer','Fullmetal Alchemist'],
            answer: 'My Hero Academia'
        },
        {
            question: 'In "Dragon Ball Z", who is Goku’s main rival?',
            options: ['Vegeta','Frieza','Piccolo','Cell'],
            answer: 'Vegeta'
        },
        {
            question: 'Which anime is set in a world where humanity fights against giant humanoid creatures called Titans?',
            options: ['Attack on Titan','Tokyo Ghoul','Death Note','Bleach'],
            answer: 'Attack on Titan'
        },
        {
            question: 'In "Bleach", what is the name of the main character?',
            options: ['Ichigo Kurosaki','Rangiku Matsumoto','Rukia Kuchiki','Yoruichi Shihoin'],
            answer: 'Ichigo Kurosaki'
        },
        {
            question: 'Which is the most hated character of Code Geass?',
            options: ['Lelouch vi Britannia','Suzaku Kururugi','Nunnally vi Britannia','C.C.'],
            answer: 'Lelouch vi Britannia'
        },
        {
            question: 'Which character in One Piece made Imu have shivers?',
            options: ['Monkey D. Luffy','Roronoa Zoro','Nika','Sanji'],
            answer: 'Nika'
        },
        {
            question: 'What type of creature is Totoro in My Neighbor Totoro?',
            options: ['Spirit','Forest Guardian','Spirit','Giant Cat'],
            answer: 'Spirit'
        },
        {
            question: 'In a battle to the death, which anime character would be the last man standing?',
            options: ['Wang Ling','Sinbad','Anos Voldigoad','Nika'],
            answer: 'Anos Voldigoad'
        }
    ],

    programming: [
        { 
            question: 'What does HTML stand for?', 
            options: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language','Hyperlinking Text Marking Language'], 
            answer: 'Hyper Text Markup Language' 
        },
        { question: 'Which language runs in the browser?', 
            options: ['Python','JavaScript','C++','Java'], 
            answer: 'JavaScript' 
        },
        {
            question: 'What does CSS stand for?',
            options: ['Cascading Style Sheets','Creative Style System','Computer Style Sheets','Colorful Style Sheets'],
            answer: 'Cascading Style Sheets'
        },
        {
            question: 'Which of the following is a JavaScript framework?',
            options: ['Django','Flask','React','Laravel'],
            answer: 'React'
        },
        {
            question: 'What is the correct syntax for referring to an external script called "app.js"?',
            options: ['<script src="app.js">','<script href="app.js">','<script ref="app.js">','<script name="app.js">'],  
            answer: '<script src="app.js">'
        },
        {
            question: 'Which company developed the Java programming language?',
            options: ['Microsoft','Sun Microsystems','Google','Apple'],
            answer: 'Sun Microsystems'
        },
        {
            question: 'What does SQL stand for?',
            options: ['Structured Query Language','Stylish Question Language','Statement Question Language','Structured Query List'],
            answer: 'Structured Query Language'
        },
        {
            question: 'Which of the following is not a programming language?',  
            options: ['Python','Ruby','HTML','Java'],
            answer: 'HTML'
        },
        {
            question: 'What does API stand for?',
            options: ['Application Programming Interface','Applied Programming Interface','Advanced Programming Interface','Automated Programming Interface'],      
            answer: 'Application Programming Interface'
        },
        {   question: 'Which of the following is a version control system?',
            options: ['Git','Docker','Kubernetes','Jenkins'],
            answer: 'Git'
        },
    ],

    general: [
        { 
            question: 'What is the capital of France?', 
            options: ['Berlin','Madrid','Paris','Rome'], 
            answer: 'Paris' 
        },
        { 
            question: 'Which planet is known as the Red Planet?', 
            options: ['Venus','Mars','Jupiter','Saturn'], 
            answer: 'Mars' 
        },
        {
            question: 'What is the largest mammal in the world?',
            options: ['Elephant','Blue Whale','Giraffe','Hippopotamus'],
            answer: 'Blue Whale'
        },
        {
            question: 'Who wrote the play "Romeo and Juliet"?', 
            options: ['William Shakespeare','Jane Austen','Mark Twain','Charles Dickens'],
            answer: 'William Shakespeare'
        },
        {
            question: 'What is the chemical symbol for gold?',
            options: ['Au','Ag','Fe','Pb'],
            answer: 'Au'
        },
        {   question: 'Which country is known as the Land of the Rising Sun?',
            options: ['China','Japan','South Korea','Thailand'],
            answer: 'Japan'     
        },
        {
            question: 'What is the smallest prime number?',
            options: ['0','1','2','3'],
            answer: '2'
        },
        {
            question: 'Who painted the Mona Lisa?',
            options: ['Leonardo da Vinci','Pablo Picasso','Vincent van Gogh','Claude Monet'],
            answer: 'Leonardo da Vinci'
        },
        {   question: 'What is the largest organ in the human body?',
            options: ['Heart','Liver','Skin','Lungs'],
            answer: 'Skin'  
        },
        {
            question: 'Which gas do plants primarily use for photosynthesis?',
            options: ['Oxygen','Carbon Dioxide','Nitrogen','Hydrogen'],
            answer: 'Carbon Dioxide'
        }
    ],

    popculture: [
        { 
            question: 'What is the name of the fictional superhero in Marvel?', 
            options: ['Batman','Spider-Man','Superman','Green Lantern'], 
            answer: 'Spider-Man' },
        { 
            question: 'Which movie won Best Picture in 2020?', 
            options: ['1917','Joker','Parasite','Once Upon a Time in Hollywood'], 
            answer: 'Parasite' 
        },
        {
            question: 'Who is the lead singer of the band "Coldplay"?',
            options: ['Chris Martin','Bono','Brandon Flowers','Adam Levine'],
            answer: 'Chris Martin'
        },
        {
            question: 'Which TV show features the character "Walter White"?',   
            options: ['Breaking Bad','Game of Thrones','The Wire','Stranger Things'],
            answer: 'Breaking Bad'
        },  
        {
            question: 'Who is the author of the "Harry Potter" book series?',
            options: ['J.K. Rowling','Stephen King','George R.R. Martin','Suzanne Collins'],
            answer: 'J.K. Rowling'
        },
        {   question: 'Which video game franchise features the character "Link"?',
            options: ['The Legend of Zelda','Super Mario','Final Fantasy','Metroid'],
            answer: 'The Legend of Zelda'   
        },
        {
            question: 'Who is the director of the movie "Inception"?',
            options: ['Christopher Nolan','Steven Spielberg','Quentin Tarantino','James Cameron'],
            answer: 'Christopher Nolan'
        },  
        {
            question: 'Which actor played the character "Tony Stark" in the Marvel Cinematic Universe?',
            options: ['Chris Evans','Robert Downey Jr.','Chris Hemsworth','Mark Ruffalo'],
            answer: 'Robert Downey Jr.'
        },
        {
            question: 'What is the name of the fictional city where Batman operates?',          
            options: ['Gotham City','Metropolis','Star City','Central City'],
            answer: 'Gotham City'
        },
        {
            question: 'Which TV series is set in the fictional town of Hawkins, Indiana?',
            options: ['Stranger Things','The X-Files','Twin Peaks','The Twilight Zone'],
            answer: 'Stranger Things'
        }
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
