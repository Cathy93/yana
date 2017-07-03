import React from 'react';
import { Image } from 'react-bootstrap';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import caption from '../img/logo.png';

const FaqPage = ({
    // Props
}) => (
  <div className="section-1">
    <div className="background-caption-faq">
      <h1 className="h1-faq text-center">FAQ</h1>
    </div>
    <div className="accordion-wrapper">
      <Collapse />
    </div>
    <Footer />
  </div>
)

export default FaqPage
