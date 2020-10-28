import React, { useState } from "react";

const App = () => {
  const [checkboxes, setCheckboxes] = useState(Array(4).fill(false));

  const handleItemChange = (i) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[i] = !newCheckboxes[i];
    setCheckboxes(newCheckboxes);
  };

  const allChecked = !checkboxes.includes(false);

  const handleAllChange = () => {
    const newCheckboxes = allChecked
      ? checkboxes.map(() => false)
      : checkboxes.map(() => true);
    setCheckboxes(newCheckboxes);
  };

  return (
    <form>
      <label style={{ display: "block", marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllChange}
        />{" "}
        Select all
      </label>
      {checkboxes.map((checked, i) => (
        <label key={`checkbox ${i + 1}`} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleItemChange(i)}
          />{" "}
          Item {i + 1}
        </label>
      ))}
    </form>
  );
};

export default App;
