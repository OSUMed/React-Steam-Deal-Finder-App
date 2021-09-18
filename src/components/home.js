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
import Pagination from "../helpers/pagination";

import { PageContext } from "../helpers/Context";

function Home() {
  const {
    setonSaleGames,
    searchGame,
    favorites,
    onFavDelete,
    perPage,
    setperPage,
    pages,
    setPages,
    currentPage,
    setcurrentPage,
    onSaleGames,
    paginatedPage,
    setpaginatedPage,
  } = useContext(PageContext);
  // const [gameTitle, setGameTitle] = useState("");
  // const [searchedGames, setSearchedGames] = useState([]);
  // const [onSaleGames, setonSaleGames] = useState([]);

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("print this: ", data);
        setonSaleGames(data);
        // let pagesAmount = Math.ceil(data.length / 5);

        // `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3&limit=5`
      });
    setPages(Math.ceil(onSaleGames.length / 5));
    // let newpaginatedPage = onSaleGames.slice(0, 5);
    // setpaginatedPage(newpaginatedPage);
  }, []);

  // useEffect(() => {
  //   let pagesAmount = Math.ceil(onSaleGames.length / 5);
  //   setPages(pagesAmount);
  //   console.log(
  //     "print pages and onsaleGames length1: ",
  //     pagesAmount,
  //     onSaleGames.length
  //   );
  // });

  // useEffect(() => {
  //   setPages(Math.ceil(onSaleGames.length / 5));
  //   let newpaginatedPage = onSaleGames.slice(0, 5);
  //   setpaginatedPage(newpaginatedPage);
  //   console.log("paginatedpage: ", paginatedPage);
  //   console.log("all pages: ", onSaleGames);
  // }, []);

  // const searchGame = () => {
  //   fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=5`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log("searched games: ", data);
  //       setSearchedGames(data);
  //     });
  // };
  console.log(paginatedPage, onSaleGames);
  return (
    <div className="App">
      <Search />
      <Deals />
      <Sales />
    </div>
  );
}

export default Home;
