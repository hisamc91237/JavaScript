let para = document.querySelector("p");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

let iteration = 0;

function randomChar() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[Math.floor(Math.random() * 53)];
    })
    .join("");

  para.innerText = str;
  iteration += 0.25;
}

para.addEventListener("mouseenter", () => {
  setInterval(randomChar, 30);
});
