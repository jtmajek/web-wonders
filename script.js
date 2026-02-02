let totalAmount = 0;

const prices = {
    diesel: 1.20,
    petrol: 1.35,
    aviation: 1.80
};

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    totalAmount = prices[product] * quantity;

    document.getElementById("bill").innerHTML =
        `Total Amount: $${totalAmount.toFixed(2)}`;
});

document.getElementById("payBtn").addEventListener("click", function() {
    if (totalAmount === 0) {
        alert("Please generate a bill first.");
        return;
    }

    // DEMO PAYMENT (replace with Stripe/PayPal backend later)
    setTimeout(() => {
        document.getElementById("paymentStatus").innerText =
            "✅ Payment Successful! Order Confirmed.";
    }, 1000);
});

/*
------------------------------------
STRIPE REAL PAYMENT (BACKEND REQUIRED)
------------------------------------

1. Create backend (Node/PHP)
2. Generate Stripe Checkout Session
3. Redirect user to Stripe

Example (frontend only):

fetch('/create-checkout-session', {
    method: 'POST',
    body: JSON.stringify({ amount: totalAmount })
}).then(res => res.json())
  .then(data => {
      window.location = data.url;
  });

*/
