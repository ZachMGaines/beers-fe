/* eslint-disable keyword-spacing */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBeer } from '../../state/beer';

const BeerDetails = () => {
  const { id } = useParams();
  const beer = useBeer(id);

  if (!beer) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>Beer Details</h2>
      <dl>
        <dt>Image: </dt>
        <dd>{beer.image}</dd>
        <dt>Name: </dt>
        <dd>{beer.name}</dd>
        <dt>alcohol%: </dt>
        <dd>{beer.abv}</dd>
        <dt>Type: </dt>
        <dd>{beer.type}</dd>
        <dt>Name: </dt>
        <dd>{beer.rating}</dd>

      </dl>
    </section>
  );
};

export default BeerDetails;
