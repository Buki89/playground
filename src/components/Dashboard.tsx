import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Overview = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 100px 0 0 0;
  p {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-weight: 600;
    font-size: 35px;
  }
`;

const unitDecider = (ratio: number): string => {
  if (ratio === 1) {
    return "KW/h";
  } else {
    return "MW/h";
  }
};

const Dashboard = () => {
  const [count, setCount] = useState(2000000);
  const [multiply, setMultiply] = useState(10000);
  const [consumption, setConsumption] = useState(0.15);
  const [ratio, setRatio] = useState(1);
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch("http://api.randomuser.me")
      .then(res => res.json())
      .then(response => {
        setPerson({ person: response.result[0] });
        console.log(person);
      })
      .catch(console.log);
  });

  return (
    <Row>
      <div>
        <label>
          <input
            type="number"
            value={count}
            onChange={(e: any) => setCount(e.target.value)}
          />
          Number of cars
        </label>
      </div>
      <div>
        <label>
          <input
            type="number"
            value={multiply}
            onChange={(e: any) => setMultiply(e.target.value)}
          />
          Kilometers per year
        </label>
      </div>
      <div>
        <label>
          <input
            type="number"
            value={consumption}
            onChange={(e: any) => setConsumption(e.target.value)}
          />
          Consumption(KW/h)
        </label>
      </div>
      <div>
        <select value={ratio} onChange={(e: any) => setRatio(e.target.value)}>
          <option value={1}>Kilo</option>
          <option value={1000}>Mega</option>
          <option value={1000000}>Giga</option>
          <option value={1000000000}>Tera</option>
        </select>
      </div>

      <Overview>
        <p>{`${(count * multiply * consumption) / ratio} ${unitDecider(
          ratio
        )}`}</p>
      </Overview>
    </Row>
  );
};

export default Dashboard;
