import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";

const Deals = () => {
  const {
    gameTitle,
    setGameTitle,
    searchedGames,
    setSearchedGames,
    onSaleGames,
    setonSaleGames,
    searchGame,
    appendFavorites,
    Favorites,
    setFavorites,
  } = useContext(PageContext);

  return (
    <div className="dealsSection">
      {searchedGames.map((game, key) => {
        return (
          <div key={key} className="game">
            <span className="dealsName">Game name: {game.external}</span>

            <img src={game.thumb} />

            <div className="gameInfo">
              <p className="cheapestDealText"> Sale Price: {game.cheapest}</p>
              {game.cheapestDealID ? (
                <button className="gameLink">
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}
                  >
                    Link for Best Deal
                  </a>
                </button>
              ) : (
                console.log(
                  `https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`
                )
              )}
              {game.steamAppID ? (
                <button className="gameLink">
                  <a
                    href={`https://store.steampowered.com/app/${game.steamAppID}`}
                  >
                    Steam
                  </a>
                </button>
              ) : (
                <p></p>
              )}
              <br></br>
              <button
                className="gameLink"
                onClick={() => appendFavorites(game.external, game.thumb, game.cheapest, `https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`)}
              >
                Favorite this
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deals;
