const sides=['side1','side2','side3','side4','side5','side6'];
const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const dice3 = document.querySelector('#dice3');

const rollNow1 = ()=>{
    dice1.className = sides[Math.floor(Math.random()*6)];
};

const rollNow2 = ()=>{
    dice2.className = sides[Math.floor(Math.random()*6)];
};

const rollNow3 = ()=>{
    dice3.className = sides[Math.floor(Math.random()*6)];
};

document.addEventListener('DOMContentLoaded',
    ()=>{
    dice1.addEventListener('click',rollNow1);
    dice2.addEventListener('click',rollNow2);
    dice3.addEventListener('click',rollNow3);
});

