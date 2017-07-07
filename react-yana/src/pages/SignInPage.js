// Dependencies
import React from 'react';
import { Image } from 'react-bootstrap';

// Components
import Footer from '../components/Footer';
import FormValidation from '../components/FormValidation';
import ButtonDefault from '../components/ButtonDefault';
import AnchorLink from '../components/AnchorLink';

const SignInPage = ({
    // Props
}) => (
  <div>
     <div className="sign-in-bg">
       <Image className="background-sign-in" responsive/>
       <div className="background-caption-sign-in col-xs-12 col-sm-offset-1 col-sm-10 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10">
          <h1 className="sign-in-heading-text text-center">Welcome Back</h1>

          <h4 className="forgot-password-text">Forgotten password?</h4>
          <AnchorLink title="Click Here!"
                      linkPath="/fogotPassword" />
          <ButtonDefault title="Log In"
                         buttonPath="/courses" />
       </div>
     </div>

  </div>
)

export default SignInPage
