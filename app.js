const cursor = document.getElementById("cursor");
const cursorTail = document.getElementById("cursor-tail");
let mouseX = 0;
let mouseY = 0;
let tailX = 0;
let tailY = 0;

function checkTouchDevice() {
  return "ontouchstart" in document.documentElement;
}

/*------------------custom cursor ------------------------*/

function handleAnimateTail() {
  const speed = 0.15;
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
  if (!checkTouchDevice()) {
    cursor.style.display = "inline";
    cursorTail.style.display = "inline";
    x = event.pageX;
    y = event.pageY;

    if (
      x <= document.documentElement.offsetWidth &&
      y <= document.documentElement.offsetHeight
    ) {
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      mouseX = x + 4;
      mouseY = y + 4;
    }
  } else {
    document.querySelector("body").style.cursor = "auto";
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

/*-----------------------Image dragging--------------- */

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

if (zIndex == 999) {
  zIndex = 10;
  images.forEach(image => (image.style.zIndex = zIndex));
}

/*-----------------------document reset --------------*/
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  console.log("reload!");
  location.reload(true);
});
