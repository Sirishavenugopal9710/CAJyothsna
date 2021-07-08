import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';

import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import {Career} from './components/Career'
import { Testimonials } from './components/Testimonials';
import { ContactUs } from './components/ContactUs';
import { Management } from './components/Management';
import { Indirect } from './components/Indirect';
import { Accounting } from './components/Accounting';
import { Direct } from './components/Direct';
import { Payroll } from './components/Payroll';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/why' component={WhyUs} />
          <Route path='/gallery' component={Gallery} />
           <Route path='/career' component={Career} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/management' component={Management} />
          <Route path='/direct' component={Direct} />
          <Route path='/indirect' component={Indirect} />
          <Route path='/account' component={Accounting} />
          <Route path='/pay' component={Payroll} />
          
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
