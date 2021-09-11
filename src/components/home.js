import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./navbar";
import Search from "./searchsection";
import Deals from "./dealssection";
import Sales from "./salessection";
import Login from "./login";
import Favorites from "./favorites";
import NotFound from "./NotFound";

import { PageContext } from "../helpers/Context";

function Home() {
  const { setonSaleGames, searchGame, favorites, onFavDelete } =
    useContext(PageContext);
  // const [gameTitle, setGameTitle] = useState("");
  // const [searchedGames, setSearchedGames] = useState([]);
  // const [onSaleGames, setonSaleGames] = useState([]);

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

  // const searchGame = () => {
  //   fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=5`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log("searched games: ", data);
  //       setSearchedGames(data);
  //     });
  // };

  return (
    <div className="App">
      <Search />
      <Deals />
      <Sales />
    </div>
  );
}

export default Home;
