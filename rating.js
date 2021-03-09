const stars = document.querySelectorAll("label");

window.addEventListener("click", function (e) {
  if (e.target.localName === "label") {
    if (document.querySelector(".container").contains(e.target)) {
      for (let i = 0; i < stars.length; i++) {
        stars[i].style.color = "rgba(241, 236, 236, 0.76)";
      }
      var numberStar = Number(e.target.id);
      var covertObjectArray = Object.keys(stars).map((key) => stars[key]);
      var starsReverse = covertObjectArray.reverse();

      for (let i = 0; i < numberStar; i++) {
        starsReverse[i].style.color = "#f8961e";
      }
    }
  }

  if (e.target.localName != "label" && e.target.localName != "input") {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.color = "rgba(241, 236, 236, 0.76)";
    }
  }
});
