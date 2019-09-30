const userarray=['juan','ignacio']
const passwordarray=['1234','open']
const users = document.querySelector('#users');
const password=document.querySelector('#password');
const result =document.querySelector('#result');

const userCheck = ()=>{
    const userindex=userarray.indexOf(users.value);
    if (userindex > -1) {
        if(passwordarray[userindex]===password.value){
            result.textContent="Access granted";}
        else{
            result.textContent="Access denied";
        }
     }
    else{
        result.textContent="Access denied";
    }
};

document.addEventListener('DOMContentLoaded',
    ()=>{
    const myBtn = document.querySelector("#my-btn");
    myBtn.addEventListener('click',userCheck);
});

