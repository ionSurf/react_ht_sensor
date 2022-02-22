import React from "react";

const TextField = ({ label, type, ...inputProps }) => {
  const onLocalChange = (e) => {
    type;
    //  Validate input
    // set_val(e.target.value);
    console.log(e.target.value);
    inputProps.onChange?.(e);
  };
  label;
  type;

  return (
    <div>
      <input type="text" {...inputProps} onChange={onLocalChange} />
    </div>
  );
};
export default TextField;
