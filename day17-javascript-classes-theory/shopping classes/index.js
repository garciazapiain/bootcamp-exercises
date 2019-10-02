class shoppingList {
  constructor (name, amount){
    this.name = name;
    this.amount=amount;
  }
}

let item1 = new shoppingList('apples','1kg');
let item2 = new shoppingList('bacon','200g');
let item3 = new shoppingList('cheddar','250g');
let item4 = new shoppingList('beer','6');
let item5 = new shoppingList('icecream','1kg');

let array = [item1, item2, item3, item4, item5];
console.log(array);
/*
const shoppingList = [
  ['apples', '1kg'],
  ['bacon', '200g'],
  ['cheddar', '250g'],
  ['beer', '6'],
  ['icecream', '1kg'],
];
*/

document.addEventListener('DOMContentLoaded', () => {
  const shopping=document.querySelector('.shopping-list')
  for (const item of array) {
    shopping.innerHTML += (
      `<div class="shopping-list__item">
        <span>${item.name}</span>
        <span>${item.amount}</span>
        <input type="checkbox" class="check">
       </div>`
    );
  }
});


/*
document.addEventListener('DOMContentLoaded', () => {
  const shopping=document.querySelector('.shopping-list')
    shopping.innerHTML += (
      `<div class="shopping-list__item">
        <span>${item1.name}</span>
        <span>${item1.amount}</span>
        <input type="checkbox" class="check">
       </div>`
    );
    shopping.appendChild(itmElm);
});
*/