
const minus = () => {
  const counter = document.querySelector('#counter')
  const knob = document.querySelector('#knob')
  result = parseInt(counter.textContent-1);
  if (result<0){
    result=0;
  }
  counter.textContent=result;
  knob.style.width=result+'0%';
}

const plus = () => {
  const counter = document.querySelector('#counter')
  const knob = document.querySelector('#knob')
  result = parseInt(counter.textContent)+1;
  if (result>10){
    result=10;
  }
  counter.textContent=result;
  knob.style.width=result+'0%';
}


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#minus')
    .addEventListener('click', minus);
  document.querySelector('#plus')
    .addEventListener('click',plus)
});



/*
const minus = () => {
  const counter = document.querySelector('#counter')
  if((parseInt(counter.textcontent))>parseInt(0)){
    counter.textContent= counter.textContent-1;
    console.log (counter.textContent);
  }
  else{
    console.log('het')
  }
}
*/