/*
Listing numbers
1. Output the number of items in the array to the console. Answer: 19
2. Output the number at the index 13 to the console. Answer: -10
3. Output the number which is exactly in the middle of the array. Answer: -31
4. Output every number in the array to the console.
5. Output the square of every number to the console.
6. Output only negative numbers from the array.
7. Output an absolute value of every number in the array.
8. Output only those numbers which absolute value id divisible by 3.
9. Output only even numbers from the array.
10. For every number in the array output the difference between that number and number 5.
11. For every number in the array output the squared difference of that number and number 5.
12. Output all the numbers which are greater then their predecessor in the array.
13. Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
*/

let numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

/*
1) 

console.log(numbers.length);3
*/

/*
2) 
console.log(numbers[13]);
*/

/*
3) 
console.log(numbers[(parseInt(numbers.length/2))]);
*/

/*
4) 
for (const value of numbers){
  console.log(value**2);
}
*/

/*
5) 
for (const value of numbers){
  console.log(value**2);
}
*/

/*
6) 
for (i=0; i<numbers.length; i++){
  if (numbers[i]<0){
    console.log (numbers[i])
  }
}
*/

/*
7) 
for (const value of numbers){
  console.log(Math.abs(value));
}
*/

/*
8) 
for (i=0; i<numbers.length; i++){
  if (numbers[i]%3==0){
    console.log (numbers[i])
  }
}
for (i=0; i<numbers.length; i++){
  if (numbers[i]%2==0){
    console.log (numbers[i])
  }
}
*/

/*
9) 
for (const value of numbers){
  console.log(value-5);
}
*/

/*
10)
for (const value of numbers){
  console.log(value**2-5);
}
*/

/*
11)
for (const value of numbers){
  console.log((value-5)**2);
}
*/

/*
12)
for (i=1;i<numbers.length;i++){
  if(numbers[i]>numbers[i-1]){
    console.log(numbers[i]);
  }
}
*/

/*
13)
for (i=1;i<numbers.length;i++){
  if(numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]){
    console.log(numbers[i]);
  }
}

Counting
1) Count how many negative numbers are there in the array.
2) Compute the sum of all the numbers in the array. Answer: 70
3) Compute the average of the numbers in the array. Answer: 3.68421...
4) Compute the sum of all the positive numbers in the array.
5) First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...
6) Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...
*/

/*
1)
let x=0;
for (i=1;i<numbers.length;i++){
  if(numbers[i]<0){
    x++;
  }
}
  console.log(x);

  */

/*
2)
let sum=0;
for (const value of numbers){
  sum=value +sum;
}
console.log(sum);
*/

/*
3)
let sum=0;
for (const value of numbers){
  sum=value +sum;
}
console.log(sum/numbers.length);
*/

/*
4)
let sum=0;
for (const value of numbers){
  if(value>0){
    sum=value +sum;
    console.log(value);
  }
}
console.log(sum);
*/

/*
5 and 6)
let sum=0;
let sumsq=0;
for (const value of numbers){
  sum=value +sum;
}
const avg=(sum/numbers.length);

for (const value of numbers){
  sumsq=((value-avg)**2)+sumsq;
}
console.log(sumsq);

let variance=sumsq/numbers.length;

console.log(variance);

Searching
1) Find the length of the longest ascending sequence of consecutive numbers in the array.
2) Find the longest sequence of consecutive numbers which is either ascending or descending.
3) Find the biggest element in the array
4) Find the second biggest element in the array.
5) Find the lowest peak and the highest valley in the array.

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];
1)
let ascend=1;
let comparisonascend=0;
for (i=1; i<numbers.length; i++){
  if (numbers[i]>numbers[i-1]){
    ascend++
  }
  else if(ascend>comparisonascend){
      comparisonascend = ascend;
      ascend=1;
  }
  else {
    ascend=1;
  }
}

console.log(comparisonascend);
*/

/*
2)

let ascend=1;
let comparisonascend=1;
for (i=1; i<numbers.length; i++){
  if (numbers[i]>numbers[i-1]){
    ascend++
  }
  else if(ascend>comparisonascend){
      comparisonascend = ascend;
      ascend=1;
  }
  else {
    ascend=1;
  }
}

let descend=1;
let comparisondescend=1;

for (i=1; i<numbers.length; i++){
  if (numbers[i]<numbers[i-1]){
    descend++
  }
  else if(descend>comparisondescend){
      comparisondescend = descend;
      descend=1;
  }
  else {
    descend=1;
  }
}

  console.log(comparisonascend + " in ascending order")

  console.log(comparisondescend + " in descending order")

*/

/*
3)
let max=0;
for (i=1;i<numbers.length;i++){
  if (numbers[i]>numbers[i-1]){
    if (max<numbers[i]){
      max = numbers[i]
    }
  }
}
console.log (max);
4)

function bubbleSort(numbers)
{
    let swapped
    let n = numbers.length-1
    do {
        swapped = false
        for (let i=0; i < n; i++)
        {
            // compare pairs of elements
            // if left element > right element, swap
            if (numbers[i] > numbers[i+1])
            {
               const temp = numbers[i]
               numbers[i] = numbers[i+1]
               numbers[i+1] = temp
               swapped = true
            }
        }
    } 
  // continue swapping until sorted
  while (swapped) 

  return numbers
}

const sorted = bubbleSort(numbers)

console.log(sorted[numbers.length-2]);
*/

/*
for (i=1;i<numbers.length;i++){
  if(numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]){
    console.log(numbers[i]);
  }
}
5)

Highest peak: 

let peak=0;
for (i=1;i<numbers.length;i++){
  if(numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]){
    if (peak<numbers[i]){
      peak=numbers[i]
    }
  }
}

console.log(peak);

Lowest Valley:

let valley=0;
for (i=1;i<numbers.length;i++){
  if(numbers[i]<numbers[i-1]&&numbers[i]<numbers[i+1]){
    if (valley>numbers[i]){
      valley=numbers[i]
    }
  }
}

console.log(valley);
*/

/*
Transformation
1) From the original array create a new array with a reversed order of the elements.
2) From the original array create a new array with the elements randomly shuffled. Use the Math.random method to help you with randomness.
3) From the original array create a new array with the elements sorted from lowest to highest.
*/

let reverse = numbers.reverse();
console.log(reverse);
/*
2)
*/
/*
numberss=[1,2,3,4]

console.log ('Before is ' + numberss)
for (i=0 ; i<numberss.length; i++){
  let temp=numberss[i];
  console.log("This is the temp "+temp)
  let index= Math.floor(Math.random() * numberss.length);
  console.log("This is the index "+index)
  numberss[i]=numberss[index];
  console.log("This is the numbers[i] " + numberss[i])
  numberss[index]=temp;
  console.log("This is the numbers[index]" + numberss[index])
  console.log ("This is the array "+ numberss)
}
console.log ('After shuffle is ' + numberss)
/*

3)
function bubbleSort(numbers)
{
    let swapped
    let n = numbers.length-1
    do {
        swapped = false
        for (let i=0; i < n; i++)
        {
            // compare pairs of elements
            // if left element > right element, swap
            if (numbers[i] > numbers[i+1])
            {
               const temp = numbers[i]
               numbers[i] = numbers[i+1]
               numbers[i+1] = temp
               swapped = true
            }
        }
    } 
  // continue swapping until sorted
  while (swapped) 

  return numbers
}

const sorted = bubbleSort(numbers)

console.log(sorted)

*/