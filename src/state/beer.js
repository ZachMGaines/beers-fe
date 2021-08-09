import { useEffect, useState } from 'react';
import { fetchBeer, fetchBeers } from '../services/beersAPI';

export const useBeers = (page) => {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers(page)
      .then(setBeers)
      .finally(() => setLoading(false));
  }, [page]);

  return { beers, loading };
};

export const useBeer = (id) => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetchBeer(id).then(setBeer);
  }, []);
  return beer;
};
