/*
Listing numbers
1. ✽ Write a function called len which returns the length of an array.
2. ✽ Write a function called last which returns last element of an array. Return null when the array is empty.
3. ✽ Write a function called butlast which returns last but on element of an array. Return null when the array has less then two elements.
4. ✽ Write a function called elementAt which returns k-th element of an array. The first element in the array is number 1. Return null if k is out of bounds.
5. ✽✽ Write a function called reverse which returns a reversed copy of an array. The original array must stay the same.
6. ✽✽ Write a function called isPalindrome which checks whether an array of numbers is a palindrome. Palindrome is a sequence which from start reads the same as from the end, e.g. 'level', 'racecar' or 'madam'.
7. ✽✽ Write a function called compress which eliminates consecutive duplicates an array of numbers. The function will create a new array where every repeated elements is replaced with a single copy of the element. The original array must stay the same.
8. ✽✽ Write a function called pack which packs consecutive duplicates of array elements into subarrays. If an array contains repeated elements they should be placed in separate subarrays. The original array must stay the same.
9. ✽✽ Write a function called encode which implements the so-called run-length encoding data compression method. Consecutive duplicates of elements are encoded as arrays [N, E] where N is the number of duplicates of the element E. The original array must stay the same.
*/ 

arraytest1 = [1,2]
arraytest2= [1,2]
arraytest1=arraytest1.toString();
arraytest2=arraytest2.toString();
console.log (arraytest1)
console.log (arraytest2)
if (arraytest1===arraytest2){
    console.log ('equal!')
}
else console.log('not equal')


let array = [1,2,3,2,1];

const len = (a) =>{
   return a.length;
}

let lens = () =>{
    return array.length;
}

console.log ("answer to 1 is " + array.length);

function arrayLast () {
    if (array.length>0){
        return (array[array.length-1]);
    }
    else {
        return null
    }
}
console.log ('answer to 2 is '+ arrayLast())

function butLast () {
    if (array.length>1){
        return (array[array.length-2]);
    }
    else {
        return null
    }
}
console.log ('answer to 3 is '+ butLast())


function elementAt (i) {
    if (array.length>=i){
        return (array[i-1]);
    }
    else {
        return null
    }
}

console.log ('answer to 4 is '+ elementAt(5))

let newarray = [];
function reverse () {
    let newarray = [];
    for (i=array.length-1 ; i>=0; i--){
        newarray.push(array[i]);
    }
    return newarray;
}

console.log ('answer to 5 is '+ reverse())
console.log ('original array is  '+ array)


function isPalindrome () {
    if (array===reverse()){
        return "h";
    }
}

console.log ('answer to 6 is '+ isPalindrome())

let newarrays = [];
function equals () {
    let newarrays = [];
    for (i=array.length-1 ; i>=0; i--){
        newarrays.push(array[i]);
    }
    newarrays=newarrays.toString()
    array=array.toString()
    console.log (newarrays)
    console.log (array)
    if (newarrays==array){
        return true
    }
    else{
        return false
    }
}


