import React from "react";
import { Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters-list">
        
        <CharacterList />
      </Route>
    </main>
  );
}
 