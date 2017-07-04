import React from 'react';
import { Link } from 'react-router-dom'

const AnchorLink = ({title, linkPath}) => (
    <Link className="anchor-default-link" to={ linkPath }>
      {title}
    </Link>
)

export default AnchorLink;
