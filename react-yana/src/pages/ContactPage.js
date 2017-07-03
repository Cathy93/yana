// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import Footer from '../components/Footer';

// Img
import caption from '../img/caption.jpg';

const ContactPage = ({
    // Props
}) => (
    <div>
      <div className="section-1-contact">
        <Image className="background-contact" responsive/>
          <div className="background-caption-contact">
            <Image className="background-caption-contact" src={caption} alt="vacl_caption" responsive/>
            <h1 className="h1-contact text-center">CONTACT</h1>
          </div>
      </div>
      <div></div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div></div>
      <Footer />
      <div className="map-responsive">
        <Map
          center={{ lat: -37.8031437, lng: 144.974884 }}
          zoom={14}
          markers={
            [{
              position: {
              lat: -37.8031437,
              lng: 144.974884,
             },
              key: `Australia`,
              defaultAnimation: 2,
            }]
          }
          containerElement={
            <div className="container-element" />
          }
          mapElement={
            <div className="map-element" />
          }
        />
      </div>
   </div>
)

export default ContactPage
