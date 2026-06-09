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
function removeFromCart(name){

const item = cart.find(p => p.name === name);

if(!item) return;

item.qty--;

if(item.qty <= 0){
cart = cart.filter(p => p.name !== name);
}

updateCart();
}
function placeOrder(){

const name =
document.getElementById("custName").value;

const mobile =
document.getElementById("custMobile").value;

const address =
document.getElementById("custAddress").value;

alert(
"Customer: " + name +
"\nMobile: " + mobile +
"\nAddress: " + address +
"\n\nCash On Delivery"
);

}
function placeOrder(){

const name = document.getElementById("custName").value;
const mobile = document.getElementById("custMobile").value;
const address = document.getElementById("custAddress").value;

alert(
"Customer Name: " + name +
"\nMobile: " + mobile +
"\nAddress: " + address +
"\n\nPayment: Cash on Delivery"
);

}
