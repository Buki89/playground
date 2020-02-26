import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../api/config";
import { usePosition } from "use-position";
import ItemList from "./ItemList";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  background: rgb(236, 236, 236);
`;

const Dashboard = () => {
  const [results, setResults] = useState([]);
  const { latitude, longitude } = usePosition(false);
  const [loading, setLoading] = useState(false);

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
  // useEffect(() => {
  //   if (latitude) {
  //     searchApi();
  //   }
  // }, [latitude]);
  // console.log(results);

  return <Body>{loading ? <div>loading...</div> : <ItemList />}</Body>;
};

export default Dashboard;
