import React, { useState, useRef, useEffect } from "react";
import { useBasket } from "../contexts/BasketContext";

function Paypal() {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const { totalPrice } = useBasket();
  const { products } = useBasket();
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: products.item,
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
  }, [products.item, products.price, totalPrice]);

  if (paidFor) {
    return (
      <div>
        Congrats, you just bought
        {products.map((item) => (
          <div key={item.id} className="after-buy">
            <div>{item.title}</div>
            <img src={item.img} width={100} height={100} alt={item.id} />
            <div>Link</div>
            <a href={item.audioUrl}>download</a>
          </div>
        ))}
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
