const moveEl = document.getElementById("move");

moveEl.addEventListener("mousemove", (eo) => {
  const num = Math.round(Math.random() * 400);

  moveEl.style.top = `${num}` + "px";
  moveEl.style.left = `${Math.round(Math.random() * 400)}` + "px";
});
