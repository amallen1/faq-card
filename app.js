const questions = Array.from(document.getElementsByClassName('question'));

console.log(questions);

questions.forEach(question => {
    question.addEventListener('click', (e) => {
        question.classList.toggle('clicked');
    })
})