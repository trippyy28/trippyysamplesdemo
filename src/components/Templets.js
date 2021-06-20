import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import { useAudio } from "../contexts/AudioContext";
const Container = styled.div`
  border: 2px solid black;
  padding: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  margin: 2px;
`;

const FiltersContainer = styled.div`
  background-color: #576ca8;
  padding: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const VIEW_ALL = "All";
const Templets = () => {
  const { templets } = useBasket();
  const { onAdd } = useBasket();
  const { playAudio } = useAudio();
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const genres = _.uniq(_.map(templets, "genre"));
  genres.unshift(VIEW_ALL);
  return (
    <Container>
      <FiltersContainer>
        <select
          onChange={(e) => setGenre(e.target.value)}
          onBlur={(e) => setGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </FiltersContainer>
      <Grid>
        {templets
          .filter(
            ({ genre }) => selectedGenre === VIEW_ALL || genre === selectedGenre
          )
          .map((product) => (
            <Product
              isExpensive={product.price > 15}
              title={product.title}
              id={product.id}
              price={product.price}
              genre={product.genre}
              img={product.img}
              audioUrl={product.audioUrl}
            >
              <div>{product.title}</div>
              <div>{product.price}$</div>
              <img width={100} height={100} src={product.img} alt="1" />
              <h4>coming soon!</h4>
            </Product>
          ))}
      </Grid>
    </Container>
  );
};

export default Templets;
