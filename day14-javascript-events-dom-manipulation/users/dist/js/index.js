const userarray=['juan','ignacio'];
const users = document.querySelector('#users');
const result =document.querySelector('#result')
const counter=0

const userCheck = ()=>{
    for(i=0; i < userarray.length; i++){
        if (userarray[i]===users);{
        result.textContent="Access granted"
        counter=counter + 1
        }
    }
    if (counter<0){
        result.textContent="Access denied"
    }
};

document.addEventListener('DOMContentLoaded',
    ()=>{
    const myBtn = document.querySelector("#my-btn");
    myBtn.addEventListener('click',userCheck);
});



