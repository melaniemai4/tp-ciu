import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleMenuItemClick = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handleQuantityChange = (item, quantity) => {
    setSelectedItems((prevItems) => prevItems.map((menuItem) => {
      if (menuItem.id === item.id) {
        return { ...menuItem, quantity };
      }
      return menuItem;
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <Header />
      <Home/>
      <About/>
      <Menu/>
    </div>
  );
};

export default App;
