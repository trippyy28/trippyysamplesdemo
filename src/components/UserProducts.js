import React from "react";
import { useBasket } from "../contexts/BasketContext";
const UserProducts = () => {
  const { userProducts } = useBasket();
  console.log(userProducts, "hi");
  return (
    <div>
      <h1>dsadasd</h1>

      {userProducts.map((product) => {
        return (
          <div>
            <h1>{product.price}</h1>
            <h1>{product.genre}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UserProducts;
