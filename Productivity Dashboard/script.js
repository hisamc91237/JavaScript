function openFeature() {
  let allElems = document.querySelectorAll(".elem");
  let elemPage = document.querySelectorAll(".fullElems");

  let closeButton = document.querySelectorAll(".fullElems .close");
  console.log(closeButton);

  allElems.forEach((x) => {
    x.addEventListener("click", () => {
      elemPage[x.id].style.display = "block";
    });
  });

  closeButton.forEach((x) => {
    x.addEventListener("click", () => {
      elemPage[x.id].style.display = "none";
    });
  });
}

openFeature();
