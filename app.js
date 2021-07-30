const questions = Array.from(document.getElementsByClassName('question'));
const answers = Array.from(document.getElementsByClassName('answer'));

console.log(questions);

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('clicked');
    })
})