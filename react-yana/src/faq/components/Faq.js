import React from 'react';
import NavMenu from '../../navmenu/components/NavMenu';
import Footer from '../../footer/components/Footer';
import Collapse from './Collapse';
import { Image } from 'react-bootstrap';
import caption from '../../img/logo.png';

class Faq extends React.Component {
    render() {
        return(
            <div>
                <NavMenu />
                <div clasName="section-1-faq">
                    <Image className="background-faq" responsive/>
                    <div className="background-caption-faq col-xs-offset-3 col-xs-6 col-sm-offset-3 col-sm-6 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 col-xl-offset-3 col-xl-6">
                        <Image className="background-caption-faq center-block" src={caption} alt="caption" responsive/>
                        <h1 className="h1-faq text-center">FAQ</h1>
                    </div>
                </div>
                <div className="accordion-wrapper">
                    <Collapse />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Faq;
