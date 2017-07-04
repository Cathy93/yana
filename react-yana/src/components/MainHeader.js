import React from 'react';
import { Image } from 'react-bootstrap';
import vaclLogo from '../img/logo.png';

const MainHeader = ({title}) => (
  <div>
      <Image className="vacl-logo" src={vaclLogo} alt="vacl_logo_caption" responsive/>
      <h1 className="home-heading-text text-center">{title}</h1>
  </div>
)
export default MainHeader;
