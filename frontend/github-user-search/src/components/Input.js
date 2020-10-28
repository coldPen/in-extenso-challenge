import React from "react";

const Input = ({ search, handleChange }) => (
  <label>
    Search for a Github user: <input value={search} onChange={handleChange} />
  </label>
);

export default Input;
