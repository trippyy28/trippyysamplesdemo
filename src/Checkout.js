import React from "react";

const Checkout = (props) => {
  return (
    <div>
      <h2>Your Price is:{props.totalPrice}$</h2>
      <button>CheckOut!</button>
    </div>
  );
};

export default Checkout;
