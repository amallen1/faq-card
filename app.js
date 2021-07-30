const questions = Array.from(document.getElementsByClassName("question"));

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentNode.classList.toggle("active");
  });
});
