import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Search from "./components/searchsection";
import Deals from "./components/dealssection";
import Sales from "./components/salessection";
import Login from "./components/login";
import Favorites from "./components/favorites";
import NotFound from "./components/NotFound";
import Home from "./components/home";

import { PageContext } from "./helpers/Context";

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
    <PageContext.Provider
      value={{
        gameTitle,
        setGameTitle,
        searchedGames,
        setSearchedGames,
        onSaleGames,
        setonSaleGames,
        searchGame,
      }}
    >
      <NavBar />
      <div className="App">
        <Search />
        <Deals />
        <Sales />
      </div>
    </PageContext.Provider>
  );
}

export default App;

// <BrowserRouter>
// <Switch>
//   <Route path="/login" component={Login}></Route>
//   <Route path="/favorites" component={Favorites}></Route>
//   <Route path="/not-found" component={NotFound}></Route>
//   <Redirect to="/not-found" />
// </Switch>
// </BrowserRouter>
