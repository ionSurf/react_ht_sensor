import React from "react";
import propTypes from "prop-types";
import {
  Row,
  Column,
  Button,
  Heading,
  TextField,
  ToggleButton,
  SectionHeading,
} from "./components";

const Layout = ({ children }) => <>{children}</>;
Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes),
  ]),
};
Layout.Row = Row;
Layout.Column = Column;
Layout.Button = Button;
Layout.Heading = Heading;
Layout.TextField = TextField;
Layout.ToggleButton = ToggleButton;
Layout.SectionHeading = SectionHeading;

export default Layout;
