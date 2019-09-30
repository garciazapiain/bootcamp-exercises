const userarray=['juan','ignacio']
const passwordarray=['1234','open']
const users = document.querySelector('#users');
const password=document.querySelector('#password');
const result =document.querySelector('#result');

const userCheck = ()=>{
    const userindex=userarray.indexOf(users.value);
    console.log('hellooo');
    console.log(userindex);
    if (userindex > -1) {
        console.log('hey');
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

/*
const userCheck = ()=>{
    for(i=0; i < userarray.length; i++){
        if (userarray[i]===users){
        result.textContent="Access granted";
        counter=counter + 1;
        break;
        }
    }
    if (counter===0){
        result.textContent="Access denied";
    }
};

*/