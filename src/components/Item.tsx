import React from "react";
import styled from "styled-components";
import getRatingColor from "../lib/helper";
import { FaStar } from "react-icons/fa";
import { Result } from "./Dashboard";

const Img = styled.img`
  margin: 0;
  padding: 0;
  width: 280px;
  height: 180px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin: 70px 0 0 0;
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

interface Props {
  item: Result;
}

const Item = ({ item }: Props) => {
  return (
    <Wrapper>
      {item.url ? <Img src={item.url} /> : <Img src='/restaurant.svg' />}

      <MenuTop>
        <div>
          <Title>{item.name}</Title>
        </div>
        <div>
          <Rating>
            <div>
              <FaStar color={getRatingColor(item.rating)} />
              {item.rating}
              <Review>{item.review} reviews</Review>
            </div>
            <div>
              <div>{Math.round(parseInt(item.distance) / 1000)}km</div>
            </div>
          </Rating>
        </div>
      </MenuTop>
    </Wrapper>
  );
};

export default Item;
