import "../css/main.scss";
import {initializeSlider} from "./slider";

import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import img5 from "../images/5.webp"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import img8 from "../images/8.jpg"
import img9 from "../images/9.jpg"
import img10 from "../images/10.jpg"


document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".slider").innerHTML = `
        <img class="img__slider" src="${img1}" alt="Slide 1">
        <img class="img__slider" src="${img2}" alt="Slide 2">
        <img class="img__slider" src="${img3}" alt="Slide 3">
        <img class="img__slider" src="${img4}" alt="Slide 4">
        <img class="img__slider" src="${img5}" alt="Slide 5">
        <img class="img__slider" src="${img6}" alt="Slide 6">
        <img class="img__slider" src="${img7}" alt="Slide 7">
        <img class="img__slider" src="${img8}" alt="Slide 8">
        <img class="img__slider" src="${img9}" alt="Slide 9">
        <img class="img__slider" src="${img10}" alt="Slide 10">
    `;

    initializeSlider();
});

