"use strict";

const btnGlobe = document.querySelector(".globe"), 
    btnClose = document.querySelector(".modale_close");

btnGlobe.addEventListener('click', () => {
    let modaleWin = document.querySelector(".overlay");
    modaleWin.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    let modaleWin = document.querySelector(".overlay");
    modaleWin.style.display = 'none';
});