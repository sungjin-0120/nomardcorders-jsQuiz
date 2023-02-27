const gen = document.getElementById("form");
const genInput = document.querySelector("#form input");
const pc = document.querySelector("#pc");
const h3 = document.querySelector("#game");
const result = document.querySelector("#results");
const submit = document.querySelector("#submit");
function hello(event) {
  event.preventDefault();
  const range = genInput.value;
  const userChoice = pc.value;
  const randomNumber = Math.floor(Math.random() * range);
  h3.innerText = `user choice:${userChoice}, rangeNum:${randomNumber}`;

  if (parseInt(userChoice) != parseInt(randomNumber)) {
    /*parseInt()를 해줘야 비교 연산이 가능한다 
    왜냐하면 range와 userChoice는 문자이기 때문에 변환과정이 필요하다*/
    result.innerText = "You lose😒";
  } else if (parseInt(userChoice) === parseInt(randomNumber)) {
    result.innerText = "you Win😘";
  }
}

gen.addEventListener("submit", hello);
