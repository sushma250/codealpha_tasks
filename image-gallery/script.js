let images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
let index = 0;

function showImage() {
  document.getElementById("galleryImage").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
