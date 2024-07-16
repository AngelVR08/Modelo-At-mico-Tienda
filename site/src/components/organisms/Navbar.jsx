import React from 'react';
import NavItem from '../molecules/NavItem';
import Image from '../atoms/Image';
import './Navbar.css';

import log from '../../assets/image/log.jpeg'
import ropp from '../../assets/image/ropp.jpg'
import ten from '../../assets/image/ten.jpg'
import ac from '../../assets/image/ac.jpg'
import su from '../../assets/image/su.jpg'
import OIP from '../../assets/image/OIP.jpg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Image src={log} alt="Logo" width="100px" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem href="proy.html">Inicio</NavItem>
            <NavItem href="#"><Image src={ropp} alt="Ropa" width="50px" /></NavItem>
            <NavItem href="#"><Image src={ten} alt="Calzado" width="60px" /></NavItem>
            <NavItem href="ac.html"><Image src={ac} alt="Accesorios" width="50px" /></NavItem>
            <NavItem href="su.html"><Image src={su} alt="Suplementos" width="50px" /></NavItem>
            <NavItem href="/carrito"><Image src={OIP} alt="Carrito de compras" width="50px" /></NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
