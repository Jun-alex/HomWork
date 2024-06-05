export function initializeSlider() {
    const sliderImages = document.querySelectorAll(".img__slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots-container");

    let currentSlide = 0;

    function showSlide(index) {
        sliderImages.forEach((image, i) => {
            image.style.display = i === index ? "block" : "none";
        });
    }

    function updateDots(index) {
        const dots = document.querySelectorAll(".dot");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function showNextSlide() {
        const nextSlide = sliderImages[currentSlide].nextElementSibling;

        if (nextSlide) {
            sliderImages[currentSlide].style.display = "none";
            currentSlide++;

            nextSlide.style.display = "block";
            prevBtn.style.display = "block";
            nextBtn.style.display = nextSlide.nextElementSibling ? "block" : "none";

            updateDots(currentSlide);
        }
    }

    function showPrevSlide() {
        const prevSlide = sliderImages[currentSlide].previousElementSibling;
        if (prevSlide) {
            sliderImages[currentSlide].style.display = "none";
            currentSlide--;

            prevSlide.style.display = "block";
            nextBtn.style.display = "block";
            prevBtn.style.display = prevSlide.previousElementSibling ? "block" : "none";

            updateDots(currentSlide);
        }
    }

    function createDots() {
        sliderImages.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");

            dot.addEventListener("click", () => {
                currentSlide = index;
                showSlide(currentSlide);
                updateDots(currentSlide);
                prevBtn.style.display = currentSlide === 0 ? "none" : "block";
                nextBtn.style.display = currentSlide === sliderImages.length - 1 ? "none" : "block";
            });

            dotsContainer.appendChild(dot);
        });
        updateDots(currentSlide);
    }

    prevBtn.addEventListener("click", showPrevSlide);
    nextBtn.addEventListener("click", showNextSlide);

    createDots();
}
