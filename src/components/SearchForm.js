import React, { useState } from "react";

export default function SearchForm(props) {

  function handleChanges(event){
        event.preventDefault();

        props.onSearch(event.target.value);
    }
 
  return (
    <section className="search-form">
     <form>
        <div>
          <div> 
            <label htmlFor="search">Search Character</label>
          </div>
          <input 
              id="search" 
              type="text" 
              placeholder="Search" 
              onChange={handleChanges}
              name="name"
          />
            </div>
      </form>
    </section>
  );
}
 