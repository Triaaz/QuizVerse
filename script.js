// Select all buttons
const buttons = document.querySelectorAll('.buttons-grid button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        localStorage.setItem('selectedCategory', btn.dataset.category);
        window.location.href = 'quiz.html';
    });
});
