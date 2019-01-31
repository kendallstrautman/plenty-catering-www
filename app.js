$(function() {
  $(".img").draggable({
    containment: "document"
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
