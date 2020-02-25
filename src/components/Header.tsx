import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 140px;
  height: 100%;
  background: #9a190e;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>Where should I eat ?</Title>
    </Wrapper>
  );
};

export default Header;
