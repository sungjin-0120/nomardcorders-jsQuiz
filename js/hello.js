const body = document.body;

function color() {
  body.classList.remove("beige");
  if (window.innerWidth <= 1920 && window.innerWidth >= 1000) {
    body.className = "";
    body.classList.add("yellow");
  } else {
    body.className = "";
    body.classList.add("aqua");
  }
}

window.addEventListener("resize", color);
