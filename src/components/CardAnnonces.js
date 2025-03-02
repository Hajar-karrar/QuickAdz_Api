import React from 'react';

const CardAnnonces = ({ annonce }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{annonce.title}</h3>
      <p style={{ color: '#555' }}>{annonce.price}</p>
    </div>
  );
};

export default CardAnnonces;