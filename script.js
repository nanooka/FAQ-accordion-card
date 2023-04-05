const arrows = document.querySelectorAll(".q-a");
const answers = document.querySelectorAll(".answer");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", (event) => {
    arrow.classList.toggle("visible");
    arrow.classList.toggle("bold");
    arrow.classList.toggle("rotate");
  });
});
