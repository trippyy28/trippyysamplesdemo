import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import "nes.css/css/nes.min.css";
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
  background-color: #fc814a;
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

const Gallery = () => {
  const { products } = useBasket();
  const { onAdd } = useBasket();
  const { playAudio } = useAudio();
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const genres = _.uniq(_.map(products, "genre"));
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
        {products
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
              {/* <audio src={product.audioUrl} controls="Play" /> */}

              <button onClick={() => playAudio(product.audioUrl)}>Play</button>
              <button onClick={() => onAdd(product)} width={20}>
                Add To Cart
              </button>
              <button>
                <Link to="/details">More Info</Link>
              </button>
            </Product>
          ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
