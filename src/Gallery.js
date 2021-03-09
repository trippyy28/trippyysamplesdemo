import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { data } from "./data";
import "nes.css/css/nes.min.css";

const Container = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

const Product = styled.div`
  border: 1px solid ${({ isExpensive }) => (isExpensive ? "blue" : "black")};
  margin: 4px;
  margin-left: 2px;
  margin-right: 2px;
`;

const FiltersContainer = styled.div`
  background-color: #fc814a;
  padding: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2px;
  width: 25%;
`;

const VIEW_ALL = "All";

const Gallery = () => {
  const [selectedGenre, setGenre] = useState(VIEW_ALL);
  const genres = _.uniq(_.map(data, "genre"));
  genres.unshift(VIEW_ALL);
  console.log(selectedGenre);
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
        {data
          .filter(
            ({ genre }) => selectedGenre === VIEW_ALL || genre === selectedGenre
          )
          .map(({ title, id, price, genre, img, audioUrl }) => (
            <Product isExpensive={price > 15}>
              <div>{title}</div>
              <div>{price}$</div>
              <img width={80} height={80} src={img} />
              <audio src={audioUrl} controls="Play" />
            </Product>
          ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
// useState
// design
