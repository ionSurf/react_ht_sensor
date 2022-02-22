import React from "react";

export default function ToggleButton({ ...inputProps }) {
  return (
    <div>
      <label>
        <input type="checkbox" {...inputProps} />
        <span>{inputProps.value}</span>
      </label>
    </div>
  );
}
