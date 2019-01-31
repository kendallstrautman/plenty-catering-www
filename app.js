const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", event => {
  cursor.style.display = "inline";
  x = event.pageX;
  y = event.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});

document.addEventListener("mouseleave", () => (cursor.style.display = "none"));
document.addEventListener(
  "mouseenter",
  () => (cursor.style.display = "inline")
);

$(function() {
  $(".img").draggable({
    containment: "document",
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

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  console.log("reload!");
  location.reload(true);
});
