import React from 'react';
import Hero from '../Hero/Hero';
import Item from '../Items/Item';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Item />
      <Popular />
      <Offers />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Shop;
