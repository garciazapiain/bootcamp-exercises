const account = prompt('Enter your account number: ');
const action = prompt('Action?: ');
const user1 = '00256784';
const user2 = '000986056';
const user3 = '001546238';
const user4 = '030987456';
if (action === 'balance') {
  if (account === user1) {
    (document.write('balance is 790 euro'));
  } else if (account === user2) {
    (document.write('balance is 5600 euro'));
  } else if (account === user3) {
    (document.write('balance is 78065 euro'));
  } else if (account === user4) {
    (document.write('balance is 120910 euro'));
  }
} else if (action === 'withdraw') {
  const withdraw = prompt('How much do you want to withdraw?');
  if ((account === user1) && (withdraw <= 790)) {
    (document.write('Here is your money'));
  } else (document.write('Not enough funds'));
  if ((account === user2) && (withdraw <= 5600)) {
    (document.write('Here is your money'));
  } else (document.write('Not enough funds'));
  if ((account === user3) && (withdraw <= 78065)) {
    (document.write('Here is your money'));
  } else (document.write('Not enough funds'));
  if ((account === user4) && (withdraw <= 120910)) {
    (document.write('Here is your money'));
  } else (document.write('Not enough funds'));
} else (document.write('unknown action'));


/*
Change your application so that after asking for the account number it asks the user for an action.
If the action is "balance", output the balance on the account as before. If the action is something
else, output "Unknown action."
Add another action to our application called "withdraw". If the user chooses this action,
they will be asked to input an amount of money to withdraw from their account. When you have the
 information subtract the withdrawn money from the correct account. If the account does not have
 enough money output an error like "Not enough money on your account."
*/
