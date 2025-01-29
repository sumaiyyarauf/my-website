import React, { useState, useEffect } from "react";

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [amount, setAmount] = useState(20); // Replace with the total price of items in cart

    // Step 1: Fetch client secret from the backend
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount })
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(error => console.error(error));
    }, [amount]);

    // Step 2: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!clientSecret) {
            console.error("Client secret not available");
            return;
        }

        const stripe = window.Stripe("your-publishable-key-here"); // Replace with your publishable key
        const cardNumber = document.getElementById("cardNumber").value;
        const cardExp = document.getElementById("cardExp").value;
        const cardCvc = document.getElementById("cardCvc").value;

        const { token, error } = await stripe.createToken({
            number: cardNumber,
            exp_month: cardExp.split("/")[0],
            exp_year: cardExp.split("/")[1],
            cvc: cardCvc,
        });

        if (error) {
            console.error(error.message);
            return;
        }

        const { clientSecret } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: token.id },
        });

        if (clientSecret) {
            alert("Payment successful!");
        } else {
            alert("Payment failed!");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className="p-6 border rounded shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                <input 
                    id="cardNumber" 
                    type="text" 
                    placeholder="Card Number" 
                    className="p-2 border rounded mb-4" 
                    required 
                />
                <input 
                    id="cardExp" 
                    type="text" 
                    placeholder="MM/YY" 
                    className="p-2 border rounded mb-4" 
                    required 
                />
                <input 
                    id="cardCvc" 
                    type="text" 
                    placeholder="CVC" 
                    className="p-2 border rounded mb-4" 
                    required 
                />
                <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default Checkout;
