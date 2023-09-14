"use strict";
document.addEventListener('DOMContentLoaded', ()=>{
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
        arrLessons = document.querySelectorAll(".courses_learne");

    function hideContentLearning(){
        arrLessons.forEach((item)=>{
            item.style.display = "none";
        });

        btns.forEach((item)=>{
            item.classList.remove('active');
        });
    }

    function showContentLearning(i = 0){
        arrLessons[i].style.display = "block";
        btns[i].classList.add('active');
    }

    hideContentLearning();
    showContentLearning();

    blockForBnts.addEventListener('click', (e)=>{
        let target = e.target;

        if(target && e.target.nodeName == 'BUTTON'){
            btns.forEach((item, i)=>{
                if(target == item){
                    hideContentLearning();
                    showContentLearning(i);
                }
            })
        }
    });
    /* end  */
});