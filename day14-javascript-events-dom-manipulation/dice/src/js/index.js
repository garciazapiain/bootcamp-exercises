const sides=['side1','side2','side3','side4','side5','side6'];
const dice = document.querySelector('#dice');

const rollNow = ()=>{
    dice.className = sides[Math.floor(Math.random()*6)];
};

document.addEventListener('DOMContentLoaded',
    ()=>{
    dice.addEventListener('click',rollNow);
});

