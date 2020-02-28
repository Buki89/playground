import React, { useState } from "react";

interface Props {
  defaultValue?: string;
  min: number;
  max: number;
  step: number;
  handleGetValue?: (args: number) => void;
}

const RangeInput = ({
  min,
  max,
  step,
  handleGetValue,
  defaultValue = "0"
}: Props) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetValue(parseInt(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {value}
        <input
          name='range'
          type='range'
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Submit'></input>
    </form>
  );
};

export default RangeInput;
