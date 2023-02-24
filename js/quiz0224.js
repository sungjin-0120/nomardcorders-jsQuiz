const body = document.body;

function style() {
  let newcolor;
  if (window.innerWidth <= 1920 && window.innerWidth >= 1366) {
    body.style.backgroundColor = "tomato";
  } else if (window.innerWidth < 1366 && window.innerWidth >= 900) {
    body.style.backgroundColor = "blue";
  } else if (window.innerWidth < 900) {
    body.style.backgroundColor = "purple";
  }
  body.style.backgroundColor = newcolor;
}

window.addEventListener("resize", style);
console.log(window.innerWidth);
