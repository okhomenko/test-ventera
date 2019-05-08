import React from 'react';

import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Marketing from '../components/Marketing';

import PagesService from '../services/PagesService';

function Home() {
  const { slides, features, tiles } = PagesService.fetchHomePage();

  return (
    <>
      <Header/>
      <main role="main">
        { slides && <Carousel slides={ slides }/> }

        <Marketing features={ features } tiles={ tiles }/>

        <Footer/>
      </main>
    </>
  );
}

export default Home;
