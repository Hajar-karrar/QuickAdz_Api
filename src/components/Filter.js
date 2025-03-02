import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, setPriceFilter } from '../Reducers/Actions';

const Filter = () => {
    const annonces=useSelector((state)=>state.annonces)
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  const handleMinPriceChange = (e) => {
    dispatch(setPriceFilter(Number(e.target.value), Infinity));
  };

  const handleMaxPriceChange = (e) => {
    dispatch(setPriceFilter(0, Number(e.target.value)));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
 <select onChange={handleNameChange} style={{ marginRight: '10px' }}>
        <option value="">Tous les noms</option>
        {annonces.map((annonce) => (
          <option key={annonce.id} value={annonce.title}>
            {annonce.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Rechercher par nom"
        onChange={handleNameChange}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Prix minimum"
        onChange={handleMinPriceChange}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Prix maximum"
        onChange={handleMaxPriceChange}
      />
    </div>
  );
};

export default Filter;