const arrows = document.querySelectorAll(".q-a");
const answers = document.querySelectorAll(".answer");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", () => {
    arrows.forEach(function (otherArrow) {
      otherArrow.classList.remove("visible");
      otherArrow.classList.remove("bold");
      otherArrow.classList.remove("rotate");
    });
    arrow.classList.add("visible");
    arrow.classList.add("bold");
    arrow.classList.add("rotate");
  });
});
