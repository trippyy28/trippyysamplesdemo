import React from "react";
import StripCheckout from "react-stripe-checkout";
import { useBasket } from "../../contexts/BasketContext";
const StripeCheckoutButton = () => {
  const { totalPrice } = useBasket();
  const price = { totalPrice };
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51Ix736F5wkqL3aAj6HSUEKf3kXrsKWkGaLnX9khwv6QCZdM66QyqYTTBf9vLKGL4O21JyuCk7qaMN6p8AZJ7KYw100h9LKzy6v";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripCheckout
        label="Pay Now"
        name="Trippy-Samples"
        description={`your total price is ${totalPrice}$`}
        amount={priceForStrip}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
