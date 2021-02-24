const stars = document.querySelectorAll("label");
window.addEventListener("click", function (e) {
  if (!document.querySelector(".container").contains(e.target)) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.color = "rgba(241, 236, 236, 0.76)";
    }
  }
});
