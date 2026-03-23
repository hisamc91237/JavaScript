let btn = document.querySelector("button");
let title = document.querySelector("h1");
let counter = 0;

btn.addEventListener("click", () => {
  counter++;
  console.log(counter);
  title.textContent = `Counter is ${counter}`;
});
