const shoppingList = [
  ['apples', '1kg'],
  ['bacon', '200g'],
  ['cheddar', '250g'],
  ['beer', '6'],
  ['icecream', '1kg'],
];

document.addEventListener('DOMContentLoaded', () => {
  const shopping=document.querySelector('.shopping-list')
  for (const item of shoppingList) {
    const itmElm=document.createElement('div');
    itmElm.innerHTML = (
      `<div class="shopping-list__item">
        <span>${item[0]}</span>
        <span>${item[1]}</span>
        <input type="checkbox" class="check">
       </div>`
    );
    shopping.appendChild(itmElm);
  }
});


