import React from "react";
import { dummyData } from "../dummy/data";
import Item from "./Item";
import { Result } from "./Dashboard";

interface Props {
  businessData: Array<Result>;
}

const ItemList = ({ businessData }: Props) => {
  return (
    <>
      {businessData.map((item, index: number) => (
        <div key={index}>
          <Item item={item} />
        </div>
      ))}
    </>
  );
};

export default ItemList;
