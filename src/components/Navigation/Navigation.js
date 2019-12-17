import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-wrapper blue-grey">
      <ul id="nav-mobile" className="left">
        <li><Link to="/">QR</Link></li>
        <li><Link to="/change-password">Cambio de contraseña</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
