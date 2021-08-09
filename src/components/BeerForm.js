/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { makeBeer } from '../services/beersAPI';

const BeerForm = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [abv, setAbv] = useState();
  const [type, setType] = useState();
  const [rating, setRating] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name, image, abv, type, rating
    };
    makeBeer(obj);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="Name" onChange={((e) => setName(e.target.value))} value={name}></input>
    <input placeholder="Image" onChange={((e) => setImage(e.target.value))} value={name}></input>
    <input placeholder="Alcohol%" onChange={((e) => setAbv(e.target.value))} value={name}></input>
    <input placeholder="Type" onChange={((e) => setType(e.target.value))} value={name}></input>
    <input placeholder="Rating" onChange={((e) => setRating(e.target.value))} value={name}></input>
    <button>Submit</button>
  </form>;

};
export default BeerForm;
