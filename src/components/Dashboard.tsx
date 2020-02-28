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

interface Props {
  limit: number;
  range: number;
}
export interface Result {
  name: string;
  url: string;
  rating: number;
  review: number;
  distance: string;
}

const Dashboard = ({ limit, range }: Props) => {
  const [results, setResults] = useState<Array<Result>>([]);
  const { latitude, longitude } = usePosition(false);
  const [loading, setLoading] = useState(true);

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: limit,
          radius: range,
          term: "food",
          latitude: latitude,
          longitude: longitude
        }
      });
      setResults(
        response.data.businesses.map(
          (item: any): Result => {
            return {
              name: item.name,
              url: item.image_url,
              rating: item.rating,
              review: item.review_count,
              distance: item.distance
            };
          }
        )
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (latitude && limit && range) {
      searchApi();
    }
  }, [latitude, limit, range]);
  console.log(results);
  console.log(range);
  console.log(limit);
  return (
    <Body>
      {loading ? <div>loading...</div> : <ItemList businessData={results} />}
    </Body>
  );
};

export default Dashboard;
