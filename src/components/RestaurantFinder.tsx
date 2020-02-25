import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../api/config";
import { FaStar } from "react-icons/fa";
import { usePosition } from "use-position";
import getRatingColor from "../helper";

const Img = styled.img`
  margin: 0;
  padding: 0;
  width: 280px;
  height: 180px;
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  background: rgb(236, 236, 236);
`;
const Wrapper = styled.div`
  background: #fff;
  display: block;
  align-content: space-between;
  width: 280px;
  height: 320px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 1);
`;
const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin: 50px 0 0 0;
  font-size: 16px;
  div {
    display: flex;
  }
`;
const Review = styled.div`
  margin: 0 0 0 15px;
`;
const Title = styled.h4`
  margin: 0;
`;
const SubTitle = styled.div`
  margin: 0;
  display: flex;
  font-size: 14px;
  div {
    margin: 0 5px 0 0;
  }
`;
const MenuTop = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  min-height: 140px;
  box-sizing: border-box;
  :hover {
    background-color: #e6e6e6;
    transition: 0.5s;
  }
`;

const RestaurantFinder = () => {
  const [results, setResults] = useState([]);
  const { latitude, longitude } = usePosition(false);
  const [loading, setLoading] = useState(true);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: "food",
          latitude: latitude,
          longitude: longitude
        }
      });
      setResults(response.data.businesses);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (latitude) {
      searchApi();
    }
  }, [latitude]);
  return (
    <Body>
      {loading ? (
        <div>loading...</div>
      ) : (
        results.map((item, index) => (
          <Wrapper key={index}>
            {item.image_url ? (
              <Img src={item.image_url} />
            ) : (
              <link href='%PUBLIC_URL%/restaurant.svg' />
            )}

            <MenuTop>
              <div>
                <Title>{item.name}</Title>
                <SubTitle>
                  {item.categories.map((item, index: number) => (
                    <div key={index}>{item.title}</div>
                  ))}
                </SubTitle>
              </div>
              <div>
                <Rating>
                  <div>
                    <FaStar color={getRatingColor(item.rating)} />
                    {item.rating}
                    <Review>{item.review_count} reviews</Review>
                  </div>
                  <div>
                    <div>{Math.round(parseInt(item.distance) / 1000)}km</div>
                  </div>
                </Rating>
              </div>
            </MenuTop>
          </Wrapper>
        ))
      )}
    </Body>
  );
};

export default RestaurantFinder;
