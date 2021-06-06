let question1 = document.getElementById("question-1");
let question2 = document.getElementById("question-2");
let question3 = document.getElementById("question-3");
let question4 = document.getElementById("question-4");
let question5 = document.getElementById("question-5");

let ans1 = document.getElementById("answer-1");
let ans2 = document.getElementById("answer-2");
let ans3 = document.getElementById("answer-3");
let ans4 = document.getElementById("answer-4");
let ans5 = document.getElementById("answer-5");

question1.addEventListener("click", function () {
  question1.style.fontWeight = "bold";
  ans1.style.display = "block";
});

question2.addEventListener("click", function () {
  question2.style.fontWeight = "bold";
  ans2.style.display = "block";
});

question3.addEventListener("click", function () {
  question3.style.fontWeight = "bold";
  ans3.style.display = "block";
});

question4.addEventListener("click", function () {
  question4.style.fontWeight = "bold";
  ans4.style.display = "block";
});

question5.addEventListener("click", function () {
  question5.style.fontWeight = "bold";
  ans5.style.display = "block";
});
