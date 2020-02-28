import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Limit from "./inputs/RangeInput";
import Range from "./inputs/RangeInput";
import { connect } from "react-redux";
import { setLimit, setRange } from "../store/actions/filter";
import { FilterState } from "../lib/types";

interface Props {
  setLimit: typeof setLimit;
  setRange: typeof setRange;
  limit: number;
  range: number;
}

const HomePage = ({ setLimit, setRange, limit, range }: Props) => {
  const handleGetLimit = (limit: number) => {
    setLimit(limit);
  };

  const handleGetRange = (range: number) => {
    setRange(range);
  };

  return (
    <>
      <Header />
      <Limit
        min={0}
        max={100}
        step={1}
        handleGetValue={handleGetLimit}
        defaultValue='50'
      />
      <Range
        min={0}
        max={40000}
        step={1000}
        handleGetValue={handleGetRange}
        defaultValue='5000'
      />
      <Dashboard limit={limit} range={range} />
    </>
  );
};

const mapStateToProps = (state: FilterState) => {
  return {
    limit: state.limit,
    range: state.range
  };
};

const mapDispatchToProps = {
  setLimit,
  setRange
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
