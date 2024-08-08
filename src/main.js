import "./styles.css";

const images = [
  "https://burst.shopifycdn.com/photos/rugged-red-canyon-peaks.jpg?width=450",
  "https://burst.shopifycdn.com/photos/abandoned-plane-in-sunflower-field.jpg?width=450",
  "https://burst.shopifycdn.com/photos/tall-lighthouse-on-sharp-rocky-shoreline-against-blue-water.jpg?width=450",
  "https://burst.shopifycdn.com/photos/drone-view-of-car-driving-through-forest.jpg?width=450",
];

//render images in the dom
const carouselSlideEl = document.querySelector(".carousel-slide");

images.forEach((imageSrc, idx) => {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imageSrc);
  imageElement.setAttribute("alt", `image ${idx}`);

  carouselSlideEl.appendChild(imageElement);
});

let currentIndex = 0;

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const carouselSlide = document.querySelector(".carousel-slide");
  carouselSlide.style.transform = `translateX(-${currentIndex * 450}px)`;
}

const carouselControlsEl = document.querySelector(".carousel-controls");

images.forEach((_, idx) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = `${idx + 1}`;

  buttonEl.onclick = () => {
    currentIndex = idx;
    updateCarousel();
  };

  carouselControlsEl.appendChild(buttonEl);
});
