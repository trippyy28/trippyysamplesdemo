import React, { useState, useRef, useEffect } from "react";
import { useBasket } from "../../contexts/BasketContext";
import styled from "styled-components";
const Product = styled.div`
  border: 1px solid;
  margin: 0 auto 10px auto;
  width: 50%;
  text-align: center;
`;

function Paypal() {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const { totalPrice } = useBasket();
  const { cartItems } = useBasket();
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: cartItems.title,
                amount: {
                  currency_code: "USD",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [cartItems.title, cartItems.price]);

  if (paidFor) {
    return (
      <div>
        <h1>
          Congrats, you just bought
          {cartItems.map((item) => (
            <div key={item.id}>
              <div>{item.title}</div>
              <img src={item.img} width={100} height={100} alt={item.id} />
            </div>
          ))}
          !
        </h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}

      <div ref={paypalRef} />
    </div>
  );
}

export default Paypal;
