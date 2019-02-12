import React from "react";

const Result = ({ medianPrimes }) => (
  <div style={{ fontSize: "20px" }}>
    <p>The median prime(s): {medianPrimes.toString()}</p>
  </div>
);

export default Result;
