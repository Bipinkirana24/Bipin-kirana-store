let cart = [];

// Add Product
function addToCart(name, price){

const item = cart.find(p => p.name === name);

if(item){
item.qty++;
}
else{
cart.push({
name: name,
price: price,
qty: 1
});
}

updateCart();
}

// Remove Product
function removeFromCart(name){

const item = cart.find(p => p.name === name);

if(!item) return;

item.qty--;

if(item.qty <= 0){
cart = cart.filter(p => p.name !== name);
}

updateCart();
}

// Update Cart
function updateCart(){

let total = 0;
let count = 0;

cart.forEach(item => {

total += item.price * item.qty;
count += item.qty;

});

const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

if(cartCount){
cartCount.innerText = count;
}

if(cartTotal){
cartTotal.innerText = total;
}

}

// Show Cart
function showCart(){

if(cart.length === 0){
alert("Cart Empty");
return;
}

let text = "Cart Items:\n\n";

cart.forEach(item => {

text += item.name +
" x " +
item.qty +
"\n";

});

alert(text);

}

// Place Order
function placeOrder(){

const name =
document.getElementById("custName").value;

const mobile =
document.getElementById("custMobile").value;

const address =
document.getElementById("custAddress").value;

if(
name === "" ||
mobile === "" ||
address === ""
){
alert("Please fill all details");
return;
}

if(cart.length === 0){
alert("Cart Empty");
return;
}

let orderItems = "";
let total = 0;

cart.forEach(item => {

orderItems +=
item.name +
" x " +
item.qty +
"\n";

total +=
item.price *
item.qty;

});

let message =

"New Order - Bipin Kirana Store\n\n" +

"Customer Name: " +
name +
"\n\n" +

"Mobile: " +
mobile +
"\n\n" +

"Address: " +
address +
"\n\n" +

"Ordered Items:\n" +
orderItems +
"\n" +

"Total Amount: ₹" +
total +
"\n\n" +

"Payment: Cash on Delivery";

alert(message);

/*

WhatsApp Later

const whatsappNumber = "";

window.open(
"https://wa.me/" +
whatsappNumber +
"?text=" +
encodeURIComponent(message)
);

*/

}
