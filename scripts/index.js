document.querySelector('.order-form').addEventListener('submit', (e) => {
    e.preventDefault();
})

document.getElementById('main-section-button').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({behavior: "smooth"});
});

let links = document.querySelectorAll('.menu-item > a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        document.getElementById(link.getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
    });
});

let buttons = document.querySelectorAll('.product-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('order').scrollIntoView({behavior: "smooth"});
    });
});

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let orderAction = document.getElementById('order-action');

orderAction.addEventListener('click', () => {
    let hasError = false;

    [burger, name, phone].forEach((item) => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach((item) => {
            item.value = '';
        });
        alert('Спасибо за заказ! Мы скоро свяжемя с вами!');
    }
});

let prices = document.querySelectorAll('.products-item-price');

document.getElementById('change-currency').addEventListener('click', (e) => {
   let currentCurrency =  e.target.innerText;

   let newCurrency = '$';
   let coefficient = 1;

   if (currentCurrency === '$') {
       newCurrency = '₽';
       coefficient = 80;
   } else if (currentCurrency === '₽') {
       newCurrency = 'BYN';
       coefficient = 3;
   } else if (currentCurrency === 'BYN') {
       newCurrency = '€';
       coefficient = 0.9;
   } else if (currentCurrency === '€') {
       newCurrency = '¥';
       coefficient = 6.9;
   }
   e.target.innerText = newCurrency;

   prices.forEach((p) => {
       p.innerText = +(p.getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
   });
});