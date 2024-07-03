'use strict';

const firstPage = document.querySelector('.firstpage');
const mainTitle = firstPage.querySelector('.firstpage h1.heading');
const background = firstPage.querySelector('.background');
const middleground = firstPage.querySelector('.middleground');
const foreground = firstPage.querySelector('.foreground');
const FIRST_PAGE_SCROLL_MAX= 500;
const FIRST_TRANS_MAX = 550;
const FIRST_TRANS_MIN = 450;
const secondPage = document.querySelector('.secondpage');
const spans = secondPage.querySelectorAll('.secondpage h1.heading span');
const SECOND_PAGE_XOFFSET = 700;
const SEVEN_LEARN_IMG_SHOW =1000;
const sevenLearnImg = secondPage.querySelector('.turtlemascot');
const thirdPage = document.querySelector('.thirdpage');
const THIRD_PAGE_SHOW = 1500;
const catImages = thirdPage.querySelectorAll('.imgs .img');

document.addEventListener('scroll',function(event){
    let scrollOffset = window.pageYOffset;
    if(scrollOffset <= FIRST_PAGE_SCROLL_MAX){
        let scale = scrollOffset  / FIRST_PAGE_SCROLL_MAX;
        firstPage.hidden = false
        firstPage.style.opacity = 1;
        mainTitle.style.scale = 1 + ( scale - 0.1 );
        background.style.scale = 1 + (0.6 * scale);
        foreground.style.scale = 1 + scale;
        middleground.style.scale = 1 + (0.4 * scale);
    };
    if(FIRST_TRANS_MIN <= scrollOffset &&scrollOffset <= FIRST_TRANS_MAX){
        let opacity =(1 - (scrollOffset / FIRST_PAGE_SCROLL_MAX)) * 10;
        console.log(opacity);
        if(opacity <0){
            firstPage.hidden = true;
        }
        else{
            firstPage.style.opacity = 0
        }
    };
    if(scrollOffset > FIRST_TRANS_MAX){
        let YOffset = scrollOffset - FIRST_TRANS_MAX+'px';
        spans[0].style.transform = `translateY(${YOffset})`;
        spans[2].style.transform = `translateY(-${YOffset})`;
        sevenLearnImg.style.opacity = 0;
    };
    if(scrollOffset > SECOND_PAGE_XOFFSET){
        let XOffset = scrollOffset - SECOND_PAGE_XOFFSET+'px';
        spans[1].style.transform = `translateX(-${XOffset})`;
    }
    if(scrollOffset > SEVEN_LEARN_IMG_SHOW){
        let imgShow = (scrollOffset -SEVEN_LEARN_IMG_SHOW)/500;
        sevenLearnImg.style.opacity = imgShow;
        if(imgShow<1.001){
            sevenLearnImg.style.transform = `scale(${imgShow})`;
        }
    }
    if(scrollOffset>THIRD_PAGE_SHOW){
        let transform = (scrollOffset - THIRD_PAGE_SHOW)/10 ;
        console.log(transform);
        if(transform <101){
            secondPage.style.bottom = transform+'%';
            thirdPage.style.top = (100 -transform)+'%';
            catImages[1].style.transform = `translate(0,-${transform}px)`
        }
    }
})