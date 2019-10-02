class Product {
  constructor (name, price, quantity){
    this.name = name;
    this.price=price;
    this.quantity=quantity;
  }
  sell(){
    return this.quantity -1;
  }
}

const array = [
new Product('iphone','$1000','1'),
new Product('tv','$2000','10'),
new Product('laptop','$1200','5'),
new Product('earphones','$100','20'),
new Product('charger','$30','20'),
new Product('hdmicable','$20','15'),
new Product('speakers','$80','6'),
];

document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelector('.products-list')
  for (const item of array) {
    const itmElm= document.createElement('div');
    itmElm.innerHTML += (
      `<div class="products-list__item">
        <span>${item.name}</span>
        <span>${item.price}</span>
        <span>${item.quantity}</span>
        <button class='button'>buy</button>
       </div>`
    );
    itmElm.querySelector('button').addEventListener('click', () =>{
      item.sell();
    });
    products.appendChild(itmElm);
  }
});

