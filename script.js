let buttonOne = document.querySelector(".container .wp button");
let buttonTwo = document.querySelector(".bodyscreen button");
buttonOne.addEventListener("click", () => {
  html2canvas(document.body.querySelector(".wp")).then(canvas => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "image.png";
    a.click();
  });
});
buttonTwo.addEventListener("click", () => {
  html2canvas(document.body).then(canvas => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "image.png";
    a.click();
  });
});
