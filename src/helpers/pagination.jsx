import React, { useState, useEffect, useContext, Component } from "react";
import { PageContext } from "./Context";

function Pagination() {
  const {
    setonSaleGames,
    searchGame,
    favorites,
    onFavDelete,
    perPage,
    setperPage,
    pages,
    setpages,
    currentPage,
    setcurrentPage,
    onSaleGames,
    changePage,
    activePage,
  } = useContext(PageContext);
  let pagesArrbefore = [...Array(pages + 1).keys()];
  let pagesArr = pagesArrbefore.length > 0 ? pagesArrbefore.slice(1) : null;
  // console.log("this is pagesArr: ", pagesArr, pages);
  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          {pagesArr.map((page) => (
            <li className={activePage(page)}>
              <a className="page-link" onClick={() => changePage(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

{
  /* <nav>
<ul className="pagination">
    {pagesAmount.map(page => (
        <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={() => changePage(page)}>{page}</a>
        </li>
    ))}
</ul>
</nav> */
}
{
  /* <nav aria-label="...">
<ul className="pagination">
  <li className="page-item disabled">
    <a className="page-link" href="#" tabindex="-1">
      Previous
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">
      1
    </a>
  </li>
  <li className="page-item active">
    <a className="page-link" href="#">
      2 <span class="sr-only">(current)</span>
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">
      3
    </a>
  </li>
  <li className="page-item">
    <a className="page-link" href="#">
      Next
    </a>
  </li>
</ul>
</nav>

<nav aria-label="...">
        <ul className="pagination">
          {pagesArr.map((page) => {
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => changePage(page)}>
                {page}
              </a>
            </li>;
          })}
        </ul>
        <hr />
        <span>WE ARE HERE {currentPage}</span>
      </nav> */
}
