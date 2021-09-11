import react from "react";
import React, { useContext } from "react";
import { PageContext } from "../helpers/Context";
import { Button } from "react-bootstrap";

const Sales = () => {
  const {
    gameTitle,
    setGameTitle,
    searchedGames,
    setSearchedGames,
    onSaleGames,
    setonSaleGames,
    searchGame,
    favorites,
    setFavorites,
    appendFavorites,
  } = useContext(PageContext);
  let salessectionLike = false;

  return (
    <div>
      <h1 className="latestDealsIntro"> Latest Deals </h1>
      <div className="salesSection">
        {onSaleGames.map((game, key) => {
          return (
            <div key={key} className="salesGame">
              <span className="salesName">{game.title}</span>
              <br />
              <img className="imgSize" src={game.thumb} />
              <p className="saleText">
                <strong className="salesSavedText">
                  You save {game.savings.substr(0, 2)}%!{" "}
                </strong>
                <br />
                The <strong>regular price</strong> is {game.normalPrice} <br />{" "}
                and the <strong>deal price</strong> {game.salePrice}
              </p>
              <div className="gameInfo">
                <p className="cheapestDealText"> </p>
                {game.steamAppID ? (
                  <div>
                    <button className="gameLink">
                      <a
                        href={`https://store.steampowered.com/app/${game.steamAppID}`}
                      >
                        Go To Steam
                      </a>
                    </button>
                    <br />
                    <button
                      className="gameLink"
                      onClick={() =>
                        appendFavorites(game.title, game.thumb, game.salePrice, `https://store.steampowered.com/app/${game.steamAppID}`)
                      }
                    >
                      Favorite this
                    </button>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              <strong>Steam Rating Percent:</strong> {game.steamRatingPercent}{" "}
              <br />
              <strong>Steam Rating Comments:</strong> {game.steamRatingText}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sales;
