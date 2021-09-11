import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";

function Search() {
  const { setGameTitle, searchGame } = useContext(PageContext);

  return (
    <div className="searchSection">
      <strong className="introText"> Steam Deal Finder</strong>
      <h2 className="introText2"> Search For A Game</h2>
      <input
        type="text"
        placeholder="Starcraft..."
        onChange={(event) => {
          setGameTitle(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.keyCode == 13) {
            searchGame();
          }
        }}
      />
      <button className="searchButton" onClick={searchGame}>
        Search Game Title
      </button>
    </div>
  );
}

export default Search;
