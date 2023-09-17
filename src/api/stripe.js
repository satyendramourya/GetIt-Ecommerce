//stripe payment function
import { loadStripe } from "@stripe/stripe-js";
  

export  const makePayment = async (productData) => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const body = {
      products: productData,
    }

    const headers = {
      "Content-Type": "application/json",
    }

    const response = await fetch("http://localhost:7000/api/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }

  }