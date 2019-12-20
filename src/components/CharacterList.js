import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
         .get(`https://rickandmortyapi.com/api/character/`) 
         .then(res => {
             console.log(res.data.results);
             setCharacter(res.data.results);
         })
         .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <section className="character-list">
      <div className="character-list">
        {character.map((item, index) => {
          return <CharacterCard 
                    key={index}
                    name={item.name}
                    image={item.image}
                  />
        })}
      </div>
    </section>
  );
}
