import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MainNaviBar({ routes }) {
  return (
    <nav>
      {routes.map((r) => (
        <Link key={r.id} to={r.route}>
          {r.title}
        </Link>
      ))}
    </nav>
  );
}
MainNaviBar.propTypes = {
  routes: propTypes.arrayOf(propTypes.object),
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.arrayOf(propTypes.object),
  ]),
};
