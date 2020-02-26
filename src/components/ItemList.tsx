import React from "react";
import { dummyData } from "../dummy/data";
import Item from "./Item";

const ItemList = () => {
  return (
    <>
      {dummyData.map((item, index) => (
        <div key={index}>
          <Item item={item} />
        </div>
      ))}
    </>
  );
};

export default ItemList;
