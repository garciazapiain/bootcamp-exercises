const result=document.querySelector('#calc__result');
let input=document.querySelector('#calc__input');
const equals=document.querySelector('#btn-equals');
let sum=parseInt(0);

const addFunction = ()=>{
    sum= parseInt(sum) + parseInt(input.value);
    result.textContent=sum;
}

const clearFunction = ()=>{
    result.textContent=parseInt(0);
    input.value=parseInt(0);
    sum=parseInt(0);
}

const subtractFunction = ()=>{
    sum= parseInt(sum) - parseInt(input.value);
    result.textContent=sum;
}

const multiplyFunction = ()=>{
    sum= parseInt(sum) * parseInt(input.value);
    result.textContent=sum;
}

const divideFunction = ()=>{
    sum= parseInt(sum) / parseInt(input.value);
    result.textContent=sum;
}


document.addEventListener('DOMContentLoaded',
()=>{
    const addBtn=document.querySelector('#btn-add');
    addBtn.addEventListener('click',addFunction);
    const clearBtn=document.querySelector('#btn-clear')
    clearBtn.addEventListener('click',clearFunction)
    const subtractBtn=document.querySelector('#btn-subtract')
    subtractBtn.addEventListener('click',subtractFunction)
    const multiplyBtn=document.querySelector('#btn-multiply')
    multiplyBtn.addEventListener('click',multiplyFunction)
    const divideBtn=document.querySelector('#btn-divide')
    divideBtn.addEventListener('click',divideFunction)
})

