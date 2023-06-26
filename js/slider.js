"use strict";

const SubheaderContent = [
    "1 ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corrupti molestiae quo consectetur quasi magni! Ut libero vero pariatur consequatur. Illo id nihil officiis ipsam maxime eveniet. Soluta, tenetur reprehenderit!",
    "2 ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corrupti molestiae quo consectetur quasi magni! Ut libero vero pariatur consequatur. Illo id nihil officiis ipsam maxime eveniet. Soluta, tenetur reprehenderit!"
],
    TextContent = [
        "Lorem 1 dolor sit amet consectetur, adipisicing elit. Vitae ut molestiae perspiciatis sed ipsam laborum commodi culpa non repudiandae cupiditate magnam sequi pariatur excepturi repellat, est voluptatem officia aperiam quam.",
        "Lorem 2 dolor sit amet consectetur, adipisicing elit. Vitae ut molestiae perspiciatis sed ipsam laborum commodi culpa non repudiandae cupiditate magnam sequi pariatur excepturi repellat, est voluptatem officia aperiam quam."
    ],
    arrImage = [
        "../img/slider/picture-one.png",
        "../img/slider/picture-two.png"
    ];

const blockSlider = document.querySelector("#slider"),
    blockSliderSubHeader = blockSlider.querySelector('.slider_content-subheader'),
    blockSliderText = blockSlider.querySelector('.slider_content-text'),
    blockSliderImage = blockSlider.querySelector(".slider_image");

let frame = 0;
let slider = setInterval(function log() {

    if (frame == arrImage.length)
        frame = 0;
    else {
        blockSliderImage.style.background = 'url(' + arrImage[frame] + ') center center/cover no-repeat';
        blockSliderSubHeader.innerHTML = SubheaderContent[frame];
        blockSliderText.innerHTML = TextContent[frame];
        frame++;
    }

}, 5000);