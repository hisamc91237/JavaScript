let btn = document.querySelector("button");

let loader = document.querySelector(".inner");
let newButtonParent = document.querySelector(".btngrp");

let title = document.querySelector("h2");

let load = 0;
let intervalStop = null;

let startDownload = () => {
  load = 0; // reset load everytime
  loader.style.width = "0%";

  // create cancel button
  let cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel Now";
  cancelButton.classList.add("cancelBtn");
  newButtonParent.appendChild(cancelButton);

  // hide the button
  btn.style.display = "none";

  // start loader
  intervalStop = setInterval(() => {
    if (load >= 100) {
      clearInterval(intervalStop);
      title.textContent = "Download Complete! ✅";
      cancelButton.remove();
      btn.style.display = "block"; // ✅ show download button again
      return;
    }
    load++;
    title.textContent = `Downloading : ${load}%`;
    loader.style.width = load + "%";
  }, 50);

  // cancel button logic
  cancelButton.addEventListener("click", () => {
    clearInterval(intervalStop); // ✅ stop the loader
    load = 0; // ✅ reset load
    loader.style.width = "0%"; // ✅ reset loader bar
    title.textContent = "Download Cancelled ❌";
    cancelButton.remove(); // ✅ remove cancel button
    btn.style.display = "block"; // ✅ show download button again
  });
};

// ✅ only one event listener on btn, never stacks
btn.addEventListener("click", startDownload);
