const hamb = document.querySelector('#hamb');
const menu = document.querySelector('#menu');

const dissapear = ()=>{
  menu.style.visibility = 'hidden';
};
const appear = ()=>{
  menu.style.visibility = 'visible';
};
document.addEventListener('DOMContentLoaded',
    ()=>{
    hamb.addEventListener('mouseleave',dissapear);
    hamb.addEventListener('mouseenter', appear);
});

