import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../api/config";

const Img = styled.img`
  margin: auto;
  width: 100px;
  height: 50px;
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  border: 1px solid #000;
  width: 100px;
  height: 70px;
  margin: 10px;
`;
const RestaurantFinder = () => {
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: "food",
          location: "Prague"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    searchApi();
  }, []);

  console.log(results);

  return (
    <Body>
      {results.map((item, index) => (
        <Wrapper key={index}>
          <Img src={item.image_url} />
          <div>{item.name}</div>
          <div>{item.rating}</div>
        </Wrapper>
      ))}
    </Body>
  );
};

export default RestaurantFinder;
