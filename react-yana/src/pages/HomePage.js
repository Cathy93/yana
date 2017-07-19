// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import Footer from '../components/Footer';
import ButtonDefault from '../components/ButtonDefault';
import ButtonThin from '../components/ButtonThin';
import AnchorLink from '../components/AnchorLink';
import MainHeader from '../components/MainHeader';

// Img
import boomerang from '../img/boomerang.png';
import vaclLogoMod from '../img/vacl_mod_logo.jpg';
import bio from '../img/bio.jpg';


const HomePage = ({
    // Props
}) => (
  <div>
    <div className="section-1-home">
      <MainHeader title="Dive into Aboriginal Culture!"/>
      <Image className="boom-img" src={boomerang} alt="boomerang_caption" responsive/>
      <div className="learn-now-button-container text-center">
              <ButtonDefault title="Learn Now"
                             buttonPath="/Languages" />
              <ButtonThin title="Register"
                             buttonPath="/register" />
          </div>
          <h3 className="text-center"> Not a new user?</h3>
          <div className="sign-in-link-container text-center">
              <AnchorLink title="Sign in"
                          linkPath="/sign_in" />
                        </div>
                        <div className="sign-up-link-container text-center">
                          <AnchorLink title="Sign Up"
                                      linkPath="/sign_up" />
          </div>
    </div>

    <div id="about" className="secondary-section">
      <h1>About Us</h1>

      <div className="secondary-section-wrapper">
        <div className="secondary-section-content">
          <p>
            This app is an Aboriginal Language education tool to help revive, strengthen and thrive
            the Aboriginal cultures within their local communities.
          </p>

          <p>
            It is an interactive tool to empower students and help others to connect with the local
            indigenous societies.
          </p>

          <p>
            You will learn about the various regional indigenous languages, their tribal groups,
            their stories and their methodologies.
          </p>
        </div>
        <div className="secondary-section-image">
          <Image src={vaclLogoMod} alt="vacl_logo_mod" />
        </div>
      </div>
    </div>

    <div className="secondary-section">
      <h1>Testimonial</h1>

      <div className="secondary-section-wrapper">
        <div className="secondary-section-content">
          <p>
            I love the approachable format, the sign-up process was seamless and the flow of the
            Aboriginal courses are relatable.
          </p>

          <p>
            I found the Hints and Q&A posts very useful.
          </p>

          <p className="secondary-section-emphasis">By Joe</p>
        </div>

          <div className="secondary-section-image">
            <Image src={bio} alt="bio_photo"/>
          </div>
        </div>
      </div>
    <Footer />
  </div>
)

export default HomePage
