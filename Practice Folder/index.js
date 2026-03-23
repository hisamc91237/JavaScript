let box = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
