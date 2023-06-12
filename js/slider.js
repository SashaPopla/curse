"use strict";

const SubheaderContent = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corrupti molestiae quo consectetur quasi magni! Ut libero vero pariatur consequatur. Illo id nihil officiis ipsam maxime eveniet. Soluta, tenetur reprehenderit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corrupti molestiae quo consectetur quasi magni! Ut libero vero pariatur consequatur. Illo id nihil officiis ipsam maxime eveniet. Soluta, tenetur reprehenderit!"
];

const TextContent = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ut molestiae perspiciatis sed ipsam laborum commodi culpa non repudiandae cupiditate magnam sequi pariatur excepturi repellat, est voluptatem officia aperiam quam.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ut molestiae perspiciatis sed ipsam laborum commodi culpa non repudiandae cupiditate magnam sequi pariatur excepturi repellat, est voluptatem officia aperiam quam."
];

const arrImage = [
    "../img/slider/picture-one.png"
];

const blockSlider = document.querySelector("#slider"),
      blockSliderImage = blockSlider.querySelector(".slider_image");

blockSliderImage.style.background = 'url(../img/slider/picture-one.png) center center/cover no-repeat';