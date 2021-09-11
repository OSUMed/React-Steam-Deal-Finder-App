import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Login from "./components/login";
import Favorites from "./components/favorites";
import NotFound from "./components/NotFound";
import Home from "./components/home";
import { PageContext } from "./helpers/Context";
import React, { useState, useEffect, useContext, Component } from "react";
import Toast from "react-bootstrap/Toast";
import "./App.css";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [onSaleGames, setonSaleGames] = useState([]);
  const [test, testGroup] = useState("Hello");
  const [favorites, setFavorites] = useState([]);
  const [titleId, settitleId] = useState(0);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("searched games: ", data);
        setSearchedGames(data);
      });
  };

  const appendFavorites = (gameTitle, gameThumb) => {
    settitleId(titleId + 1);
    let currentFavorites = [...favorites];
    currentFavorites.push({ title: gameTitle, id: titleId, img: gameThumb });
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Added to Favorites!</Toast.Body>
    </Toast>;
    setFavorites(currentFavorites);
  };

  const onFavDelete = (selected) => {
    let filteredFavorites = [...favorites];
    filteredFavorites = favorites.filter(
      (unselected) => unselected.id != selected
    );

    setFavorites(filteredFavorites);
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
        test,
        favorites,
        setFavorites,
        appendFavorites,
        onFavDelete,
      }}
    >
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </PageContext.Provider>
  );
}

export default App;

// <BrowserRouter>
// <Switch>

// </Switch>
// </BrowserRouter>
