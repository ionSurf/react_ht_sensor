import React from "react";
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
