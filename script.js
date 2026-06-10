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
    alert(name + " Cart me add ho gaya!"); // Grahak ko pata chale isliye alert
}

// Remove Product (Agar aage buttons lagao toh ye kaam aayega)
function removeFromCart(name){
    const item = cart.find(p => p.name === name);

    if(!item) return;

    item.qty--;

    if(item.qty <= 0){
        cart = cart.filter(p => p.name !== name);
    }

    updateCart();
}

// Update Cart (Total amount aur count screen par dikhane ke liye)
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

// Show Cart (Cart Button par click karne par popup dikhega)
function showCart(){
    if(cart.length === 0){
        alert("Cart Empty hai bhai!");
        return;
    }

    let text = "🛒 Cart Items:\n\n";
    cart.forEach(item => {
        text += "• " + item.name + " x " + item.qty + " = ₹" + (item.price * item.qty) + "\n";
    });

    alert(text);
}

// Place Order (Asli WhatsApp Trigger yahan hai)
function placeOrder(){
    const name = document.getElementById("custName").value.trim();
    const mobile = document.getElementById("custMobile").value.trim();
    const address = document.getElementById("custAddress").value.trim();

    if(name === "" || mobile === "" || address === ""){
        alert("Kripya apni saari details (Naam, Mobile, Address) bharein!");
        return;
    }

    if(cart.length === 0){
        alert("Aapka cart khali hai! Pehle samaan add karein.");
        return;
    }

    let orderItems = "";
    let total = 0;

    // Samaan ki list ready karna
    cart.forEach((item, index) => {
        orderItems += (index + 1) + ". " + item.name + " (" + item.qty + " pack) - ₹" + (item.price * item.qty) + "\n";
        total += item.price * item.qty;
    });

    // WhatsApp par jaane wala message format (Bold text ke liye * use kiya hai)
    let message = 
        "*नया ऑर्डर - BIPIN KIRANA STORE*\n\n" +
        "*Grahak Ki Details:*\n" +
        "📝 Naam: " + name + "\n" +
        "📞 Mobile: " + mobile + "\n" +
        "📍 Pata: " + address + "\n\n" +
        "*Samaan Ki List:*\n" + 
        orderItems + "\n" +
        "*Total Bill Amount: ₹" + total + "*\n\n" +
        "💵 *Payment Mode:* Cash on Delivery";

    // 🔴 APNA REAL WHATSAPP NUMBER YAHAN DALEIN (Country code 91 ke sath, bina '+' ke)
    const whatsappNumber = "917049657681"; 

    // WhatsApp link open karne ka system
    window.open(
        "https://api.whatsapp.com/send?phone=" + 
        whatsappNumber + 
        "&text=" + 
        encodeURIComponent(message),
        "_blank"
    );
}
