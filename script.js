let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById("total").innerText = total;
}

function processPayment(event) {
    event.preventDefault();

    if (total === 0) {
        document.getElementById("paymentMessage").innerText =
            "Your cart is empty!";
        return;
    }

    document.getElementById("paymentMessage").innerText =
        "Payment successful! Thank you for your purchase 🥚";
    total = 0;
    document.getElementById("total").innerText = total;
}
