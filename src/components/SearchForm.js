import React, { useState } from "react";

export default function SearchForm() {
 
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
              // onChange={handleChanges}
              name="name"
              // value={member.name}
          />
            </div>
      </form>
    </section>
  );
}
 