function expandImage(src) {
    document.getElementById("expandedImg").src = src;
    document.getElementById("expandedView").style.display = "flex";
}

function closeImage() {
    document.getElementById("expandedView").style.display = "none";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 3000); // 
}