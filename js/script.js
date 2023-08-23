"use strict";
/* first flider start*/
const btnsGlobe = document.querySelectorAll(".globe"), 
    btnClose = document.querySelector(".modale_close");


btnsGlobe.forEach((item)=>{
    item.addEventListener("click", () => {
        let modaleWin = document.querySelector(".overlay");
        modaleWin.style.display = "block";
    });
});

btnClose.addEventListener('click', () => {
    let modaleWin = document.querySelector(".overlay");
    modaleWin.style.display = "none";
}); 
/* first flider end*/

/* choose learning */
const blockForBnts = document.querySelector(".choose_courses_btn"),
    btns = blockForBnts.querySelectorAll("button"),
    arrLessons = [ ...document.querySelectorAll(".courses_learne") ];

console.log(btns);
console.log(arrLessons);

btns.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        console.log(e.target);
        /*if(item.innerText !== "C#")
            console.log("It`s not C#");
        console.log(item);*/
    });
});
/* end  */