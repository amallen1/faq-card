const questions = Array.from(document.getElementsByClassName("question"));

questions.forEach((question) => {
  question.addEventListener("click", () => {
    hideAnswers();
    question.parentNode.classList.add("active");
    
  });
});

const hideAnswers = () => {
  for (i = 0; i < questions.length; i++) {
    questions[i].parentNode.classList.remove("active");
  }
};
