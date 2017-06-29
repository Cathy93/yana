import React from 'react';
import { Image } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return(
            <footer className="navfooter text-center">
                <div className="keepintouchcontainer">
                  <Image className="background-home-5" responsive/>
                  <h3 className="textin-keepintouchcontainer">Stay in touch with us....</h3>
                </div>
                <div className="sociallinkcontainer">
                    <i className="fa fa-envelope sociallink" aria-hidden="true"></i>
                    <i className="fa fa-twitter sociallink" aria-hidden="true"></i>
                    <i className="fa fa-facebook-square sociallink" aria-hidden="true"></i>
                </div>
                <div className="contactdetailcontainer">
                    <h2 className="textin-contactdetailcontainer">
                        Victorian Aboriginal Corporation for Languages
                    </h2>
                    <address className="address-contactdetailcontainer">
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
