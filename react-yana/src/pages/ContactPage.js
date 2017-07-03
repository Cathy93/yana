// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import ContactForm from '../components/ContactForm';
import MainHeader from '../components/MainHeader';
import Map from '../components/Map';
import Footer from '../components/Footer';

// Img
import caption from '../img/caption.jpg';

const ContactPage = ({
    // Props
}) => (
    <div>
        <MainHeader title="Contact"/>
      <div className="contact-wrapper"/>
        <ContactForm />
      <div className="contact-wrapper"/>
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
