const roll= () => {
    return Math.floor(Math.random()*6) +1;
}
const areaTriangle=(x,y) => {
    return x*y/2;
}

const area = (w) => w/2;

const foo = (y) => {
    return y(20);
}

const greet= () => {
    console.log('hello');
}

setTimer(greet, 50);