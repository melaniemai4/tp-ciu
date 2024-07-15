
// components/MenuItem.js
import React from 'react';


const MenuItem = ({ name, description, price }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
    </li>
  );
};

export default MenuItem;
