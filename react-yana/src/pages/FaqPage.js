// Dependencies
import React from 'react';
// Components
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader'

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
