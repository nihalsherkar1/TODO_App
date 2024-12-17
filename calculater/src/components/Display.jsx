import { useState } from "react";
import "../App.css";

const Display = ({ data, handleOnChange }) => {
  return (
    <>
      <input
        type="text"
        name="digit"
        value={data}
        onChange={handleOnChange}
        readOnly
      />
    </>
  );
};

export default Display;
