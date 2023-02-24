const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2");

const superEventHandler = {
  enter: function () {
    h2.innerText = "The Mouse is here";
    h2.style.color = colors[0];
  },
  gone: function () {
    h2.innerText = "The Mouse is gone";
    h2.style.color = colors[1];
  },
  rightClick: function () {
    h2.innerText = "That was a right click";
    h2.style.color = colors[2];
  },
  handleWindowResize: function () {
    h2.innerText = "You just Resized!";
    h2.style.color = colors[3];
  },
  handleWindowMouseUp: function () {
    h2.innerText = "That was right click!!";
    h2.style.color = colors[4];
  },
};

h2.addEventListener("mouseenter", superEventHandler.enter);
h2.addEventListener("mouseleave", superEventHandler.gone);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("mouseup", superEventHandler.handleWindowMouseUp);
