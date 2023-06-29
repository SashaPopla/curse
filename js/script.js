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

/* choose learning */
const blockForBnts = document.querySelector('.choice_courses_btn'),
    btns = blockForBnts.querySelectorAll('button'),
    arrLessons = [ ...document.querySelectorAll('.courses_learne') ];

console.log(btns);
console.log(arrLessons);

btns.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item.innerText !== 'C#')
            console.log('It`s not C#');
        console.log(item);
    });
});
/* end  */