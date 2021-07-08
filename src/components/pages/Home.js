import React from 'react';
import '../../App.css';

import { Header } from '../Header';
import Services from './Services';
import { About } from '../About';
import { WhyUs } from '../WhyUs';


import { Testimonials } from '../Testimonials';
import { ContactUs } from '../ContactUs';


import { Card } from '../Card';


function Home() {
  return (
    <>
      <Header />
      <About />
      <Card />
      <Services />

      <WhyUs />


      <Testimonials />
      <ContactUs />


    </>
  );
}

export default Home;
