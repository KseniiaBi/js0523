const filterHeaders = document.querySelectorAll('.group .header');

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-mini')){
        addToCart(e.target.dataset.id);
    }
});

filterHeaders.forEach(header=>{
    header.onclick = () => expandFilter(header);
});

function expandFilter(el){
    el.parentNode.classList.toggle('active');
    el.parentNode.classList.toggle('inactive');
}


// checked filter

const products = document.querySelectorAll('.catalogue .item');
const filters = document.querySelectorAll('.filters .group input');
const filterShowing = {
    categories: [],
    minPrice: 0,
    maxPrice: Infinity
};

filters.forEach(filter => {
    filter.onchange = () => {
        let val = filter.value;
        filter.checked ? filterShowing.categories.push(val) : filterShowing.categories.splice(filterShowing.categories.indexOf(val), 1);
        showFilteredProducts();
    }
});

function showFilteredProducts(){
    products.forEach(product=> {
        let price = product.querySelector('.price p').textContent;
        price = Number(price.substring(0, price.length - 4));

        if(filterShowing.categories.includes(product.dataset.group) &&
         price >= filterShowing.minPrice && price <= filterShowing.maxPrice){
            product.style.display = 'block';
        }
        else{
            product.style.display = 'none';
        }
    })
}

// filter by price 

const priceMin = document.querySelector('.price .minimal');
const priceMax = document.querySelector('.price .maximal');

if(priceMax != null){
    priceMax.onchange = filterByprice;
    priceMin.onchange = filterByprice;
}

function filterByprice(){
    const min = priceMin.value != '' ? priceMin.value : 0;
    const max = priceMax.value != '' ? priceMax.value : Infinity;
    filterShowing.minPrice = min;
    filterShowing.maxPrice = max;

    showFilteredProducts();
}

// get products

let storage = window.localStorage;
const APP_NAME = 'Aestetics_shop';
const url = 'js/data.json';

let shopData;
let promise = fetch(url);
	promise.then(res => res.text())
			.then(res => {
				shopData = JSON.parse(res);
			});

// add to cart

const cart = storage.getItem(APP_NAME) != null ? JSON.parse(storage.getItem(APP_NAME)) : [];

function addToCart(id, count = 1){
    let adding;
    shopData.forEach(product => {
        if(product.id === +id){
            adding = product;
        }
    });
    let wasInCart = false;
    cart.forEach(itemInCart => {
        if(itemInCart.id === +id){
            wasInCart = true;
            itemInCart.count += count;
        }
    });
    if(!wasInCart){
        cart.push({...adding, 'count': 1});
    }

    saveCartToLS();
}


function saveCartToLS(){
    storage.setItem(APP_NAME, JSON.stringify(cart));
}

// cart page 

const cart_inner = document.querySelector('.cart_inner');

function buildCart(){
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart_item');

        const cartPreview = new Image();
        cartPreview.src = item.img;

        const name = document.createElement('div');
        name.classList.add('prod_name');
        name.innerText = item.name;

        const count = document.createElement('input');
        count.type = 'number';
        count.classList.add('counter');
        count.value = item.count;
        count.onchange = () => {
            let newcount = count.value;
            cart.forEach(prod => {
                if(prod.id === item.id){
                    prod.count = newcount;
                    saveCartToLS();
                }
            })
        }

        const price = document.createElement('div');
        price.classList.add('price');

        const delBtn = document.createElement('div')
        delBtn.classList.add('del');
        delBtn.onclick = () => {
            cart.forEach((prod, index) => {
                if(prod.id === item.id){
                    delBtn.parentNode.remove();
                    cart.splice(index, 1);
                    saveCartToLS();
                }
            })
        }


        cartItem.append(cartPreview, name, count, delBtn);
        cart_inner.append(cartItem);
    });
}

if(window.location.href.includes('cart')){
    buildCart();
}


//  contact form

const form = document.querySelector('form.bottom-group');
const nameInput = document.querySelector('input#name');
const phoneInput = document.querySelector('input#telephone');
const formEndpoint = 'mail.php';

form.onsubmit = (e) => {
    e.preventDefault();

    if(phoneInput.value.match(/^\+38 \(\d{3}\) [0-9]{3} [0-9]{2} [0-9]{2}/)){
        // send form
        
        let formData = new FormData();
        formData.append('name', nameInput.value);
        formData.append('telephone', phoneInput.value);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', formEndpoint);
        xhr.send(formData);
        xhr.onload = () =>{
            if(xhr.status === 200){
                console.log('Success!');
                nameInput.value = '';
                phoneInput.value = '';
                // show modal window with confirmation
            }
            else{
                console.error(xhr.status); 
                // show popup or error inside form
            }
        };
    }
    else{
        phoneInput.style.border = '1px solid red';
        alert('Fill your phone in format +38 (000) 000 00 00');
    }
    
}