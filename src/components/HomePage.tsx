import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import RangeInput from "./inputs/RangeInput";

const HomePage = () => {
  return (
    <>
      <Header />
      <RangeInput min={0} max={100} step={1} />
      <Dashboard />
    </>
  );
};

export default HomePage;
