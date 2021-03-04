import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { data } from "./data";

const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const Product = styled.div`
  border: 1px solid ${({ isExpensive }) => (isExpensive ? "red" : "black")};
  padding: 5px;
  margin-right: 10px;
`;

const FiltersContainer = styled.div`
  background-color: #ccccc3;
  padding: 4px;
`;

const Grid = styled.div`
  display: flex;
  padding: 4px;
`;

const Gallery = () => {
  const genres = _.uniq(_.map(data, "genre"));

  return (
    <Container>
      <FiltersContainer>
        <select onChange={() => {}}>
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </FiltersContainer>
      <Grid>
        {data.map(({ title, id, price, genre }) => (
          <Product isExpensive={price > 15}>
            <div>{title}</div>
          </Product>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
// useState 
// design
