import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm.js";
import './CharacterList.css';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  function onSearch(searchName){
        //console.log('seach', searchName);

        if( searchName && searchName.length > 0 ){
            setCharacter(allCharacters.filter( character => {
                if( character.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1 ) return true;
            }));
        }else{
            setCharacter(allCharacters);
        }
    }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
         .get(`https://rickandmortyapi.com/api/character/`) 
         .then(res => {
             console.log(res.data.results);
             setCharacter(res.data.results);
             setAllCharacters(res.data.results);
         })
         .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <section>
    <SearchForm onSearch={onSearch}/>
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
