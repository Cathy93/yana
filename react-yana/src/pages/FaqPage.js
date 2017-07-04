// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader'
import caption from '../img/logo.png';

const FaqPage = ({
    // Props
}) => (
  <div>
    <MainHeader title="FAQ"/>
    <div className="accordion-wrapper">
      <Collapse />
    </div>
    <Footer />
  </div>
)

export default FaqPage
