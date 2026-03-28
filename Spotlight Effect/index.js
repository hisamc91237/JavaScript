let box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  box.style.setProperty("--x", e.clientX + "px");
  box.style.setProperty("--y", e.clientY + "px");
});
