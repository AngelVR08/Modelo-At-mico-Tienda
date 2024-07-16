import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Card from '../components/molecules/Card';
import './HomePage.css';

import ac from '../assets/image/ac.jpg'
import an from '../assets/image/an.jpeg'
import dos from '../assets/image/dos.jpeg'
import h from '../assets/image/h.jpeg'
import m from '../assets/image/m.jpeg'
import tres from '../assets/image/tres.jpeg'
import z from '../assets/image/z.jpeg'
import XD from '../assets/videos/XD.mp4'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            {/* Corregir autoplay a autoPlay */}
            <video autoPlay loop muted width="100%">
              <source src={XD} type="video/mp4" />
            </video>
          </div>
          <div className="col-4" align="right">
            <center>
              <img src={ac} width="500px" alt="pu" />
            </center>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="1000">
                    <img src={dos} className="d-block w-100" alt="img1" />
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src className="d-block w-100" alt="img2" />
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <img src={tres} className="d-block w-100" alt="internet" />
                    <div className="carousel-caption d-none d-md-block"></div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-4" align="right">
              <center>
                <img src={an} width="500px" alt="an" />
              </center>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Card
                imgSrc={m}
                title="Zapatillas deportivas chunky con diseño de cinta con letra con diseño con cordón"
                text="$MXN1490.00"
                buttonText="Comprar Ahora"
                formId="myForm1"
              />
            </div>
            <div className="col-4">
              <Card
                imgSrc={h}
                title="Zapatillas deportivas chunky con diseño de cinta con letra con diseño con cordón"
                text="$MXN1490.00"
                buttonText="Comprar Ahora"
                formId="myForm2"
              />
            </div>
            <div className="col-4">
              <Card
                imgSrc={z}
                title="Zapatillas deportivas chunky con diseño de cinta con letra con diseño con cordón"
                text="$MXN1490.00"
                buttonText="Comprar Ahora"
                formId="myForm3"
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" align="center" style={{ marginTop: '10px' }}>
              <p>TODO DEPORTES</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
