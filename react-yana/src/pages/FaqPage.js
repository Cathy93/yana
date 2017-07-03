// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

// Img
import caption from '../img/caption.jpg';

const FaqPage = ({
    // Props
}) => (
     <div>
      <div className="section-1-faq">
        <Image className="background-faq" responsive/>
          <div className="background-caption-faq">
            <Image className="background-caption-faq" src={caption} alt="vacl_caption" responsive/>
            <h1 className="h1-faq text-center">FAQ</h1>
          </div>
     </div>
     <div className="accordion-wrapper">
       <Collapse />
     </div>
     <Footer />
     </div>
)

export default FaqPage
