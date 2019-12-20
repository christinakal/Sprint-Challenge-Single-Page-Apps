import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import './WelcomePage.css';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <div className="img-btn-container">
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
          </div>
          <Link to={`/characters-list`}>
            <Button className="button" color="info">Display All Characters!</Button>
          </Link>
      </header>
    </section>
  ); 
}
