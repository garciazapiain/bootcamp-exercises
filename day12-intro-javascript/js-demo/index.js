/*const wage = 350;
const salary = wage * 7 * 20;
const age = prompt('Enter your age: ');
document.write(parseInt(age)+5);

exercise 1: Ask the user for his birth year using the prompt function. 
Convert the result into a number by calling parseInt. Compute the users 
age using the current year. Alert a message to the user reporting his 
age using the alert function.

ANSWER:
const year=prompt("Enter year of birth: ");
alert  ("Your age is " + parseInt(2019-year));


exercise2: Salary 1 with alerts and prompts
Get back to the Salary 1 exercise and use prompts to get the wage, 
hours and days from the user. Report the computed salary using 
document.write.

ANSWER:

const wage=prompt("What is your hourly wage?: ");
const hours=prompt("How many hours a day do you work on average?: ");
const days=prompt("How many days a month do you work?: ");
document.write  ("Your monthly salary is " + parseInt(wage * hours * days));


exercise3: Currency exchange
The current exchange rate from czech crownd to euro is 25.695. Get a value from the user in 
euros and output equivalent value in czech crownds. Round the result to whole crownds using the
Math.round function

ANSWER:


const euros=prompt("How many euros do you want to convert?: ");
alert  ("You now have " + (Math.round(parseInt(euros)*25.695)) + " czech crowns");

exercise4: Working hours
1) Create an array of numbers representing how many hours you spent programming for every day of the last week. Save it into the variable hours.
2) Using the array hours, print to the console a message reporting how many hours you worked on sunday.
3) Create an array with the names of first five days in a week. Save it in a variable days.
4) Push two more item to the end of the array which will be the names the remaining days.
5) Print to the console the name of the day on index 0. Do the same with index 2 and 5.
6) Print the length of the array to the console.

ANSWER:



let hours=[10,9,8,11,10,3,4];
document.write('On sunday I worked ' + parseInt(hours[6]) + ' hours');
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.push('Saturday', 'Sunday');
document.write(days[0]);
document.write(days[2]);
document.write(days[5]);
document.write(days.length);


exercise5: Create a an 8x8 array represting this chess position. Use the following numbers to represent different kinds of pieces:
0 - no piece
1 - pawn
2 - rook
3 - knight
4 - bishop
5 - queen
6 - king
Teleport the black king to another square of the board to escape checkmate.

ANSWER:


let chess=[[5,0,0,0,0,0,0,0],
           [0,0,0,0,1,0,0,0],
           [0,0,0,0,0,1,0,1],
           [0,0,0,0,0,1,1,3],
           [0,0,0,0,0,0,1,6],
           [0,0,0,0,3,0,2,1],
           [0,0,0,0,0,0,0,1],
           [0,0,0,0,0,0,6,]]
document.write(chess[4][7]);
chess[4][7]=0;
chess[3][6]=6;
document.write(chess[3][6]);
document.write(chess[4][7]);

exercise 6 Create a page with an index.js which will

1) create an array of playing card ranks (ace, 0, 1, ..., queen, king)
2) create an array of playing card suits (clubs, spades, ...)
3) using the Math.random function generate a random index into the array of ranks and save it in a variable rankIndex,
4) using the same technique generate a random index into the array of suits and save it in a variable suitIndex,
5) Use document.write to generate random card such as 'king of hearts` on every page refresh.

ANSWER:

let cards=Math.floor(Math.random()*13)
let suits=Math.floor(Math.random()*4)
let cards_array=["2","3","4","5","6","7","8","9","10","Joker","Queen","King","Ace"];
let suits_array=["Clubs","Spades","Hearts","Diamonds"];
document.write(cards_array[cards]+" of "+ suits_array[suits]);

JS Exercises - Control Flow:
Salary 1 as a page
Create a page which will ask the user for their hourly pay, number of hours they work in a 
day, and number of days they work in a month a output their monthly salary after 25% tax. 
Output the salary with some nice message like "Your salary is 2500 euro after tax." 
Use the functions created in the previous exercise.:



ANSWER:


Random numbers page
Create a page which will output a random number between 1 and 6 every time your refresh it.
Change the page so that it asks the user for a number limit and it will output a random 
number between 1 and limit.
Finally, change the page so that it asks for min and max and output a random number 
between min and max.
ANSWER:

1)
document.write((Math.floor(parseInt(Math.random()*6))+1));
2)
let num=prompt("Give me num limit: ");
document.write((Math.floor(parseInt(Math.random()*num))+1));
3)




const random=(max1,min1) => {
    return Math.floor(Math.random() * (max1 - min1)) + min1;
}

/*
Login
Create a page that will ask the user for their login and password. Check, that the password
is equal to sore-thumb-218 and if so, output "access granted." Otherwise output "Nice try."
Create a page where the user needs to create their password for the first time. Ask 
for the password twice and check that they are the same. If not, output something like 
"Your passwords to no match."
Improve the above page so that it does not allow passwords less then 8 characters long. 
If the password is less then 8 characters output "Your password is no secure." 
In such a case do not ask the user to type the password again. Only do that if it 
passes the security check.
Let's say that the basic price for a bus ticket is 12 euro. Create a page which will ask 
the user for their age and compute a discounted price according to these rules:
age under 6 years (preschool kids): 0 euro,
age between 6 and 15 (pupils): 35% of the basic price,
age between 16 and 26 (students): 65% of the basic price,
age between 27 and 64 (adults): 100% of the basic price,
otherwise (seniors): 50% of the basic price.

ANSWER:


1)

const user = prompt('Enter your user: ');
const password = prompt('Enter your password: ');
if (password!='sore-thumb-218'){
    alert  ('Nice try');}
    else{
        alert('access granted');
    }

2 & 3)

const password1 = prompt('Enter your password: ');
if(password1.length<8){
    alert('Your password is too short')}
    else{
        const password2 = prompt('Enter your password again: '); 
        if (password1!=password2){
            alert  ('Your passwords to no match.');} 
            else{
                alert('Passwords accepted');}
            }
4)
age under 6 years (preschool kids): 0 euro,
age between 6 and 15 (pupils): 35% of the basic price,
age between 16 and 26 (students): 65% of the basic price,
age between 27 and 64 (adults): 100% of the basic price,
otherwise (seniors): 50% of the basic price.

const age = prompt('Enter your age: ');
const ticket=12;
if(age<6){
    alert('0 euro');
}
    elseif(age<16){
        alert(parseInt(ticket*.35))+' euro');   
    }
    elseif(age<27){
        alert(parseInt(ticket*.65)+' euro');   
        }
        elseif(age<64){
            alert(parseInt(ticket)+' euro');   
            }
            else{
                alert(parseInt(ticket*.5)+' euro');   
                }

                */
    

