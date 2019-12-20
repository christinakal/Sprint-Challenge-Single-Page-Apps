import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="ui centered">
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <h1 className="ui center header-style">Rick &amp; Morty Fan Page</h1>
      </Link>
    </header>
  );
}
 