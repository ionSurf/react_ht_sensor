import React from "react";
import propTypes from "prop-types";

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
TextField.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
export default TextField;
