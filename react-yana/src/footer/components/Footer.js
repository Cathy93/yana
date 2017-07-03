import React from 'react';
import { Image } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return(
            <footer className="nav-footer text-center">
              <div className="keep-in-touch-container">
                <Image className="background-footer" responsive/>
                <h3 className="text-in-keep-in-touch-container">Stay in touch with us....</h3>
              </div>
              <div className="social-link-container">
                <i className="fa fa-envelope social-link" aria-hidden="true"></i>
                <i className="fa fa-twitter social-link" aria-hidden="true"></i>
                <i className="fa fa-facebook-square social-link" aria-hidden="true"></i>
              </div>
              <div className="contact-detail-container">
                <h2 className="text-in-contact-detail-container">
                  Victorian Aboriginal Corporation for Languages
                </h2>
                <address className="address-contact-detail-container">
                  70, Hanover Street, Fitzroy 3065, VICTORIA
                  <br/>
                  (03) 9600 3811
                </address>
              </div>
            </footer>
        );
    }
}

export default Footer;
