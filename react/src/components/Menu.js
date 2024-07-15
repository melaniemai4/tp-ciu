import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';


const menu = [
  {
    "id": 1,
    "name": "Café con Leche",
    "description": "Un delicioso café con leche que te hará sentir como si estuvieras en un café parisino. Nuestro café con leche es elaborado con café de alta calidad y leche fresca.",
    "price": 1800
  },
  {
    "id": 2,
    "name": "Té Helado",
    "description": "Un té helado refrescante que te hará sentir como si estuvieras en un jardín inglés en verano. Nuestro té helado es elaborado con té de alta calidad y leche fresca, lo que lo hace perfecto para cualquier momento del día.",
    "price": 2000
  },
  {
    "id": 3,
    "name": "Jugo de Naranja",
    "description": "Un jugo de naranja natural y delicioso que te hará sentir como si estuvieras en un jardín de naranjos en primavera. Nuestro jugo de naranja es elaborado con naranjas frescas y sin aditivos.",
    "price": 2200
  },
  {
    "id": 4,
    "name": "Café con Crema",
    "description": "Un café con crema que te hará sentir como si estuvieras en un café rural en otoño. Nuestro café con crema es elaborado con café de alta calidad y crema fresca.",
    "price": 2500
  },
  {
    "id": 5,
    "name": "Croissant con Manteca", 
    "description": "Un delicioso croissant recién horneado con manteca fundida que te hará sentir como si estuvieras en un pastelero francés. Nuestro croissant es elaborado con harina fresca y manteca de alta calidad.",
    "price": 5500
  },
  {
    "id": 6,
    "name": "Pan con Manteca y Mermelada",
    "description": "Un delicioso pan tostado con manteca y mermelada. Las mermeladas pueden variar según disponibilidad de temporada.",
    "price": 3200
  },
  {
    "id": 7,
    "name": "Galletas con Chocolate",
    "description": "Galletas crujientes con chocolate derretido que te harán sentir como si estuvieras en un chocolatero en Navidad. Nuestros galletas son elaboradas con harina fresca y chocolate de alta calidad.",
    "price": 4100
  }
];




const MenuSection = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setSelectedItems([]);
    setQuantities({});
  }, []);
  const handleSelectItem = (id, quantity) => {
    setSelectedItems((prevItems) => [...prevItems, { id, quantity }]);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: quantity }));
  };

  const handleCalculateTotal = () => {
    const total = selectedItems.reduce((acc, item) => acc + item.quantity * menu.find((menuItem) => menuItem.id === item.id).price, 0);
    alert(`El precio total es: ${total}`);
  };

  return (
    <div className='menu-div'>

      <h2>Menú</h2>
      <ul className='menu-section'>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <span>{menuItem.name}</span>
            <span className='description-item'>{menuItem.description}</span>
            <span>($ {menuItem.price})</span>
            <input
              type="number"
              value={quantities[menuItem.id] || 0}
              onChange={(e) => {
                handleSelectItem(menuItem.id, parseInt(e.target.value));
              }}
              placeholder="Cantidad"
            />
            <button className="button-agregar" onClick={() => handleSelectItem(menuItem.id, 1)}>Agregar</button>
          </li>
        ))}
      </ul>
      <button className="button-precio-total" onClick={handleCalculateTotal}>Calcular Precio Total</button>
    </div>
  );
};

export default MenuSection;
