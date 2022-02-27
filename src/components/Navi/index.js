import React from "react";
import propTypes from "prop-types";
import { NaviContainer, NaviItem } from "./components";

export default function Navi({ routes }) {
  return (
    <NaviContainer>
      {routes.map((r) => (
        <NaviItem key={r.id} to={r.route}>
          {r.title}
        </NaviItem>
      ))}
    </NaviContainer>
  );
}
Navi.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
};
