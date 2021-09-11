import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Login from "./components/login";
import Favorites from "./components/favorites";
import NotFound from "./components/NotFound";
import Home from "./components/home";
import Cart from "./components/mycart";
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
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("searched games: ", data);
        setSearchedGames(data);
      });
  };

  const appendFavorites = (gameTitle, gameThumb, cheapestPrice, gameLink) => {
    settitleId(titleId + 1);
    let currentFavorites = [...favorites];
    currentFavorites.push({
      title: gameTitle,
      id: titleId,
      img: gameThumb,
      cprice: cheapestPrice,
      stock: 0,
      fullgameLink: gameLink,
    });
    console.log("current favorites: ", favorites);
    setFavorites(currentFavorites);
  };

  const addToCart = (
    gameTitle,
    gameThumb,
    cheapestPrice,
    stock,
    fullgameLink1
  ) => {
    let cartItems = [...cart];
    let newStock = stock + 1;
    cartItems.push({
      title: gameTitle,
      img: gameThumb,
      cartprice: cheapestPrice,
      cartStock: newStock,
      fullLink: fullgameLink1,
    });
    console.log("here is my cart: ", cart);
    setCart(cartItems);
  };

  const onFavDelete = (selected) => {
    let filteredFavorites = [...favorites];
    filteredFavorites = favorites.filter(
      (unselected) => unselected.id != selected
    );

    setFavorites(filteredFavorites);
  };

  const onCartDelete = (selected) => {
    let filteredFavorites = [...cart];
    filteredFavorites = cart.filter((unselected) => unselected.title != selected);

    setCart(filteredFavorites);
  };
  const toggleCheckout = (e) => {
    if (!checkout) {
      return setCheckout(true);
    }
    return setCheckout(false);
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
        cart,
        setCart,
        addToCart,
        onCartDelete,
        checkout,
        setCheckout,
        toggleCheckout,
      }}
    >
      <div>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/cart" component={Cart}></Route>
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
