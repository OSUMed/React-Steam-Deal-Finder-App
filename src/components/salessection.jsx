import react from "react";
import React, { useContext, useState, useEffect } from "react";
import { PageContext } from "../helpers/Context";
import { Button } from "react-bootstrap";
import Pagination from "../helpers/pagination";
import { Link } from "react-router-dom";

const Sales = () => {
  const [paginatedPage, setpaginatedPage] = useState([]);

  const {
    gameTitle,
    setGameTitle,
    searchedGames,
    setSearchedGames,
    onSaleGames,
    setonSaleGames,
    searchGame,
    favorites,
    pages,
    setFavorites,
    currentPage,
    appendFavorites,
  } = useContext(PageContext);

  useEffect(() => {
    let startIndex = (currentPage - 1) * 5;
    let newpaginatedPage = onSaleGames.slice(startIndex, startIndex + 5);
    setpaginatedPage(newpaginatedPage);
  }, [currentPage]);

  return (
    <div>
      <Link to="/">
        <button className="latestDealsIntro"> Latest Deals </button>
      </Link>
      <div className="salesSection">
        {paginatedPage.map((game, key) => {
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
                        appendFavorites(
                          game.title,
                          game.thumb,
                          game.salePrice,
                          `https://store.steampowered.com/app/${game.steamAppID}`
                        )
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
      <Pagination />
    </div>
  );
};

export default Sales;
