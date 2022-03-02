import React from "react";
import propTypes from "prop-types";
import TextInputField from "../../../../theme/components/TextInputField";

const TextField = ({ label, ...inputProps }) => {
  const onLocalChange = (e) => {
    //  Validate input
    // set_val(e.target.value);
    console.log(e.target.value);
    inputProps.onChange?.(e);
  };

  return (
    <TextInputField
      id="outlined-name"
      label={label}
      // value={name}
      onChange={onLocalChange}
      {...inputProps}
    />
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
