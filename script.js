let cart = [];

function addToCart(name, price) {

const item = cart.find(p => p.name === name);

if(item){
item.qty++;
}
else{
cart.push({
name:name,
price:price,
qty:1
});
}

updateCart();
}

function updateCart(){

let total = 0;
let count = 0;

cart.forEach(item=>{
total += item.price * item.qty;
count += item.qty;
});

const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

if(cartCount) cartCount.innerText = count;
if(cartTotal) cartTotal.innerText = total;

}

function showCart(){

let text = "";

cart.forEach(item=>{
text += item.name + " x " + item.qty + "\n";
});

alert(text || "Cart Empty");

}
