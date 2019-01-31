const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", event => {
  cursor.style.display = "inline";
  x = event.pageX;
  y = event.pageY;
  if (
    x <= document.documentElement.offsetWidth + 3 &&
    y <= document.documentElement.offsetHeight + 3
  ) {
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
  }
});

document.addEventListener("mouseleave", () => (cursor.style.display = "none"));
document.addEventListener(
  "mouseenter",
  () => (cursor.style.display = "inline")
);

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
