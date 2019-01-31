const cursor = document.getElementById("cursor");
const cursorTail = document.getElementById("cursor-tail");
const speed = 0.15;
let mouseX = 0;
let mouseY = 0;
let tailX = 0;
let tailY = 0;

function handleAnimateTail() {
  const distX = mouseX - tailX;
  const distY = mouseY - tailY;

  tailX += distX * speed;
  tailY += distY * speed;

  cursorTail.style.left = tailX + "px";
  cursorTail.style.top = tailY + "px";

  requestAnimationFrame(handleAnimateTail);
}

handleAnimateTail();

document.addEventListener("mousemove", event => {
  cursor.style.display = "inline";
  cursorTail.style.display = "inline";
  x = event.pageX;
  y = event.pageY;

  if (
    mouseX <= document.documentElement.offsetWidth &&
    mouseY <= document.documentElement.offsetHeight
  ) {
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    mouseX = event.pageX + 4;
    mouseY = event.pageY + 4;
  }
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
  cursorTail.style.display = "none";
});

document.addEventListener("mouseenter", () => {
  cursor.style.display = "inline";
  cursorTail.style.display = "inline";
});

$(function() {
  $(".img").draggable({
    containment: "parent",
    cursor: "none"
  });
});

const images = document.querySelectorAll(".img");
let zIndex = 10;

images.forEach(image => {
  image.addEventListener("mousedown", () => {
    zIndex++;
    image.style.zIndex = zIndex;
  });
});

//handle cursor transition

if (zIndex == 999) {
  zIndex = 10;
  images.forEach(image => (image.style.zIndex = zIndex));
}

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  console.log("reload!");
  location.reload(true);
});
