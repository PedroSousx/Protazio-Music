const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function showSlide(i) {
	if (i < 0) index = slides.length - 1;
	else if (i >= slides.length) index = 0;
	else index = i;

	const slideWidth = slides[0].clientWidth;
	carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

window.addEventListener("resize", () => showSlide(index));
