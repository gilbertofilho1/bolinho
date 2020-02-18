import React , {
 // useEffect, useState
} from 'react';
//import logo from './logo.svg';
//import api from './services/api';
// import './App.css';
// import './global.css';
// import './SideBar.css';
// import './Main.css';

import logo from './img/logo.png';

import { Link } from 'react-router-dom';


function App() {
  
  return (
    <div id="App">
    
    <nav className="navbar navbar-expand-md navbar-custom fixed-top">
      <div className="container">
        <a href="https://twitter.com/wowthemesnet" className="btn btn-lg btn-lg"><i className="fa fa-fw"></i> <span
            className="network-name">Instagram</span></a>

        <button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault"
          aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsDefault">
          <ul className="navbar-custom navbar-nav ml-auto">

            <li className="nav-item active">
              <a className="nav-link" href="#"><Link to="/home">Home</Link> <span className="sr-only">(current)</span></a>
              
            </li>

            <li className="nav-item">
             
              <a className="nav-link" href="#"> <Link to="/catalogo">Catálogo</Link></a>
            </li>
            
          </ul>

        </div>
      </div>
    </nav>

    <div className="intro">
      <div className="intro-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="brand-heading">
            <img src={logo} alt="logo" />
						</h1>
              <p className="intro-text">
                Bolos de pote e encomendas
              </p>
              <a href="#pageid" className="btn btn-circle page-scroll">
                <i className="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <section id="pageid">
      <div className="container content-section text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="d-block">Amamos bolos</h2>
            <p>
              Bolos gostosos, delicias , nao sei o q mais nao sei msm , serio, enrola aqui
              pode enrolar a vontade, de coração, enrola msm
            </p>
            
          </div>
        </div>
      </div>
    </section>

   
    <div className="powr-instagram-feed" id="a90aad3e_1581967182"></div>
    <script src="https://www.powr.io/powr.js?platform=html"></script>


   
    <section id="contact">
      <div className="container content-section text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Bolos bolinhos</h2>
            <p>
              If you like "Aries" template, we'd love to hear from you, whether it be feedback, thanks, new
              template ideas or even just to say hello, we welcome it all!
            </p>
            <p>
              <i><a href="mailto:wowthemesnet@gmail.com" className="highlightlink">email@gmail.com</a></i>
            </p>
            <ul className="list-inline banner-social-buttons">

              <li className="d-inline">
                <a href="https://www.instagram.com/bolobolinhogourmet/?hl=pt-br" target="blank"
                  className="btn btnghost btn-lg"> <span className="network-name">Instagram</span></a>
              </li>

              
				<a href="https://www.facebook.com/pages/wowthemesnet/562560840468823" className="btn btnghost btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>

            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <footer>
      <div className="container text-center">
        <p className="credits">
          Copyright &copy; Your Website 2018<br />
          <a className="highlightlink" rel="noopener noreferrer"  href="https://www.wowthemes.net">"Aries" Template by
            WowThemes.net</a>
        </p>
      </div>
    </footer>

    
    <script src="assets/js/main.js"></script>
    

    <script src="assets/js/theme.js"></script>

   
    
    </div>
  );
}

export default App;
