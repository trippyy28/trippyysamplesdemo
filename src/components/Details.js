import React from "react";
import { withRouter } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
const Details = (props) => {
  const { products } = useBasket();
  const matchId = props.match.params.id;
  return (
    <div>
      <h1>{products.find((x) => x.id === matchId).moreInfo}</h1>
    </div>
  );
};

export default withRouter(Details);
