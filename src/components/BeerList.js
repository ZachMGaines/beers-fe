import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBeers } from '../state/beer';
import Beer from './Beer';

const BeerList = () => {
  const [page, setPage] = useState(1);
  const { beers, loading } = useBeers(page);

  // eslint-disable-next-line keyword-spacing
  if (loading) return <h1>Loading...</h1>;

  const beerElements = beers.map((beer) => (
    <li key={beer.id}>
      <Link to={`/${beer.id}`}>
        <Beer {...beer} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >$lt;</button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{beerElements}</ul>
    </>
  );
};

export default BeerList;
