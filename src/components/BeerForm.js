/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { makeBeer } from '../services/beersAPI';

const BeerForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [abv, setAbv] = useState(0);
  const [type, setType] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name, image, abv, type, rating
    };
    console.log(obj, name);
    const newBeer = await makeBeer(obj);
    console.log(newBeer);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="Name" onChange={((e) => setName(e.target.value))} name="form" value={name}></input>
    <input placeholder="Image" onChange={((e) => setImage(e.target.value))} name="form" value={image}></input>
    <input placeholder="Alcohol%" onChange={((e) => setAbv(e.target.value))} name="form" value={abv}></input>
    <input placeholder="Type" onChange={((e) => setType(e.target.value))} name="form" value={type}></input>
    <input placeholder="Rating" onChange={((e) => setRating(e.target.value))} name="form" value={rating}></input>
    <button>Submit</button>
  </form>;

};
export default BeerForm;
