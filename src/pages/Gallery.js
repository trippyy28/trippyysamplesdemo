import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import "nes.css/css/nes.min.css";
import Details from "./Details";
import { Link, Route } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import { useAudio } from "../contexts/AudioContext";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
const Container = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  padding: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  font-family: highgate, sans-serif;
  font-weight: bolder;
  font-style: italic;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  border-radius: 25px;
  box-shadow: 5px 5px lightblue;
  margin: 2px;
  transition: 1s;
  &:hover {
    box-shadow: 5px 5px gray;
  }
`;

const FiltersContainer = styled.div`
  background-color: rgb(238, 246, 241);
  border-radius: 25px;
  padding: 4px;
  font-family: "Press Start 2P", cursive;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const Button = styled.button`
  background-color: rgb(29, 221, 255);
  color: black;
  font-size: 15px;
  font-family: nelson-engraved, sans-serif;

  font-weight: 400;

  font-style: normal;

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const VIEW_ALL = "All";

const Gallery = () => {
  const { productsData } = useBasket();
  const { onAdd } = useBasket();
  const { togglePlayPauseAndAddAudio } = useAudio();
  const { audioUrl } = useAudio();
  const { isPlaying } = useAudio();
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const genres = _.uniq(_.map(productsData, "genre"));
  genres.unshift(VIEW_ALL);
  return (
    <Container>
      <FiltersContainer>
        {genres.map((genre) => (
          <Button onClick={(e) => setGenre(e.target.value)} value={genre}>
            {genre}
          </Button>
        ))}
      </FiltersContainer>
      <Grid>
        {productsData
          .filter(
            ({ genre }) => selectedGenre === VIEW_ALL || genre === selectedGenre
          )
          .map((product) => (
            <Product
              title={product.title}
              id={product.id}
              price={product.price}
              genre={product.genre}
              img={product.img}
              audioUrl={product.audioUrl}
            >
              <img width={150} height={150} src={product.img} alt="1" />
              <div className="product-price">{product.price}$</div>
              {/* <audio src={product.audioUrl} controls="Play" /> */}

              <button
                className="button-play"
                onClick={() => togglePlayPauseAndAddAudio(product.audioUrl)}
              >
                {audioUrl === product.audioUrl && isPlaying ? (
                  <FaPause />
                ) : (
                  <FaPlay />
                )}
              </button>
              <button
                className="button-add"
                onClick={() => onAdd(product)}
                width={20}
              >
                Add To Cart
              </button>
              <Route exact path="/details">
                <Details />
              </Route>
              <button className="button-info">
                <Link to={`/details/${product.id}`}>More Info</Link>
              </button>
            </Product>
          ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
