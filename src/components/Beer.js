import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Beer = ({ name, image, abv, type, rating, id }) => (
  <Link to={`beers/${id}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p>{abv}</p>
        <p>{type}</p>
        <p>{rating}</p>
      </figcaption>
    </figure>
  </Link>
);

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
}.isRequired;

export default Beer;
