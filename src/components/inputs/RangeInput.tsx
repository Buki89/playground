import React, { useState } from "react";

interface Props {
  min: number;
  max: number;
  step: number;
}

const RangeInput = ({ min, max, step }: Props) => {
  const [value, setValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form>
      <label>
        {value}
        <input
          name="range"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default RangeInput;
