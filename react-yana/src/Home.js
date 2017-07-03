import React from 'react';
import NavMenu from './navmenu/components/NavMenu';
import Footer from './footer/components/Footer';
import { Image } from 'react-bootstrap';
import vaclLogo from './img/logo.png';
import boomerang from './img/boomerang.png';
import vaclLogoMod from './img/vacl_b_logo.jpg';
import bio from './img/bio.jpg';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <div>
              <NavMenu />
              <div className="section-1-home">
                  <Image className="background-home" responsive/>
                  <div className="background-caption-home col-xs-offset-3 col-xs-6 col-sm-offset-3 col-sm-6 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 col-xl-offset-3 col-xl-6">
                      <Image className="vacl-logo" src={vaclLogo} alt="vacl_logo" responsive/>
                      <h1 className="home-heading-text text-center">Dive into Aboriginal Culture</h1>
                      <Image src={boomerang} alt="boomerang" responsive/>
                      <div className="button-container text-center">
                          <button className="btn learn-now-button">
                            <Link to="/courses">Learn Now!</Link>
                          </button>
                      </div>
                      <h6 className="h6-text text-center">Not a new user?</h6>
                      <div className="sign-in-link-container text-center">
                          <a className="sign-in-link" href="#">Sign in</a>
                      </div>
                  </div>
              </div>
              <div className="section-2-home">
                  <Image className="background-home-2" responsive/>
                  <div className="container-fluid background-caption-home-2 col-xs-offset-2 col-xs-9 col-sm-offset-2 col-sm-9 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 col-xl-offset-3 col-xl-6">
                      <h1 className="home-heading-text-2 text-center">About Us</h1>
                      <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                              <p className="caption-home-2-p">This app is an Aboriginal Language education tool to help revive, strengthen and thrive
                                 the Aboriginal cultures within their local communities.
                              </p>
                              <p className="caption-home-2-p">It is an interactive tool to empower students and help others to connect with the local
                                indigenous societies.
                              </p>
                              <p className="caption-home-2-p">You will learn about the various regional indigenous languages, their tribal groups,
                                 their stories and their methodologies.
                              </p>
                          </div>
                          <div className="caption-home-2-img col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                              <Image src={vaclLogoMod} alt="vacl_logo_mod" responsive/>
                          </div>
                      </div>
                  </div>
              </div>
              <Image className="background-home-3" responsive/>
              <div className="section-4-home">
                  <Image className="background-home-4" responsive/>
                  <div className="container-fluid background-caption-home-4 col-xs-offset-2 col-xs-9 col-sm-offset-2 col-sm-9 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 col-xl-offset-3 col-xl-6">
                      <h1 className="home-heading-text-4 text-center">Testimonial</h1>
                      <div className="row">
                          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                              <p className="caption-home-4-p">I love the approachable format, the sign-up process was seamless and the flow of the
                                Aboriginal courses are relatable.
                              </p>
                              <p className="caption-home-4-p">
                                I found the Hints and Q&A posts very useful.
                              </p>
                              <p className="caption-home-4-pb">By Joe</p>
                          </div>
                          <div className="caption-home-4-img col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                              <Image src={bio} alt="bio_photo" responsive/>
                          </div>
                      </div>
                  </div>
              </div>
              <Image className="background-home-3" responsive/>
              <Footer />
            </div>
        );
    }
}

export default Home;
