import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import FormContainer from './FormContainer';
import Footer from './Footer';
import Map from './Map';
import { Image } from 'react-bootstrap';
import caption from '../img/caption.jpg';

class Contact extends React.Component {
    render() {
        return(
          <div>
              <NavMenu />
              <div clasName="section-1-faq">
                  <Image className="background-contact" responsive/>
                  <div className="background-caption-contact col-xs-offset-3 col-xs-6 col-sm-offset-3 col-sm-6 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 col-xl-offset-3 col-xl-6">
                      <Image className="background-caption-contact center-block" src={caption} alt="caption" responsive/>
                      <h1 className="h1-contact text-center">CONTACT</h1>
                  </div>
              </div>
              <div className="contact-form-wrapper">
                <Grid>
                    <Row>
                        <FormContainer />
                    </Row>
                </Grid>
              </div>
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
                        <div className="map-element"  />
                    }
                  />
              </div>
          </div>
        );
    }
}

export default Contact;
