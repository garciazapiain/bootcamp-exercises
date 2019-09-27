const message = document.querySelector('#message');
const lock = document.querySelector('#lock');

const appear = ()=>{
    message.innerHTML = "The opposite of love is not despise, it's insensibility. The opposite of profession is not ugliness, it's indifference. The opposite of faith is not recusancy, it's indifference. And the opposite of animation is not decease, it's mediocrity." ;
};
const dissapear = ()=>{
    message.innerHTML = "" ;
};

document.addEventListener('DOMContentLoaded',
    ()=>{
    lock.addEventListener('mouseenter', appear);
    lock.addEventListener('mouseleave',dissapear);
});



