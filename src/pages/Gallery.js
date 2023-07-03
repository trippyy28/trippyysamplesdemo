import React, { useState, useContext } from "react";
import styled from "styled-components";
import _ from "lodash";
import "nes.css/css/nes.min.css";
import Details from "./Details";
import { Link, Route } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import { useAudio } from "../contexts/AudioContext";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import UserContext from "../contexts/user";

const Container = styled.div`
  border-radius: 25px;
  padding: 10px;
  background-color: #a2e9ff;
`;

const Product = styled.div`
  display: flex;
  justify-content: center;
  font-family: marvin, sans-serif;
  font-weight: 400;
  font-style: normal;
  align-items: center;
  flex-direction: column;
  /* border: 0.5px solid; */
  border-radius: 25px;

  margin: 2px;
  transition: 0.5s;
  &:hover {
    box-shadow: 3px 3px 3px 3px rgb(120, 120, 130);
    background-color: whitesmoke;
  }
`;

const FiltersContainer = styled.div`
  border-radius: 25px;
  padding: 4px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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
  background-color: white;
  color: black;
  font-size: 15px;
  font-family: marvin, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  transition: 0.5s;
  &:hover,
  &:focus {
    background-color: rgb(29, 221, 255);
  }
`;

const VIEW_ALL = "All";

const Gallery = () => {
  const { productsData } = useBasket();
  const { onAdd } = useBasket();
  const { togglePlayPauseAndAddAudio } = useAudio();
  const { audioUrl } = useAudio();
  const { isPlaying } = useAudio();
  const { setIsPlaying } = useAudio();
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const { user } = useContext(UserContext);

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
              <img width={180} height={180} src={product.img} alt="1" />

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
