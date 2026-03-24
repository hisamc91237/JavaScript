let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);

  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  let c = Math.floor(Math.random() * 360);

  let div = document.createElement("div");
  main.appendChild(div);
  div.style.height = "100px";
  div.style.width = " 100px";
  div.style.backgroundColor = `rgb(${x},${y},${z})`;
  div.style.position = "absolute";
  div.style.top = a + "%";
  div.style.left = b + "%";
  div.style.rotate = c + "deg";
  div.style.overflow = "none";
});
