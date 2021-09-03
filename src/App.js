import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [onSaleGames, setonSaleGames] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log("print this: ", data);
        setonSaleGames(data);
      });
  }, []);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("searched games: ", data);
        setSearchedGames(data);
      });
  };

  return (
    <div className="App">
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
      <div className="dealsSection">
        {searchedGames.map((game, key) => {
          return (
            <div key={key} className="game">
              <h3>Game name: {game.external}</h3>

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
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="latestDealsIntro"> Latest Deals </h1>
      <div className="salesSection">
        {onSaleGames.map((game, key) => {
          return (
            <div key={key} className="salesGame">
              <h2>{game.title}</h2>
              <img src={game.thumb} />
              <p className="saleText">
                <strong style={{ fontSize: 34 }}>
                  You save {game.savings.substr(0, 2)}%!{" "}
                </strong>
                <br />
                The <strong>regular price</strong> is {game.normalPrice} <br />{" "}
                and the <strong>deal price</strong> {game.salePrice}
              </p>
              <div className="gameInfo">
                <p className="cheapestDealText"> </p>
                {game.steamAppID ? (
                  <button className="gameLink">
                    <a
                      href={`https://store.steampowered.com/app/${game.steamAppID}`}
                    >
                      Go To Steam
                    </a>
                  </button>
                ) : (
                  <p></p>
                )}
                <br></br>
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
}

export default App;
