import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg p-4" style={{ backgroundColor: '#222222' }}>
        <div className="container">
         

          <a className="navbar-brand" href="/" style={{ color: '#7b2cbf' }}>
            <strong>DeepFake Detector <i className="bi bi-shield-check"></i></strong>
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
              <li className="nav-item">
                
                <Link className="nav-link text-white" to="/About-app">How It Works</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="container my-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="text-center pt-5 mt-4">DeepFake Detector: Uncover Digital Truth</h1>
            <p className="lead text-center text-md mt-4" style={{ color: '#b0b0b0' }}>
              Protect yourself from AI-generated misinformation
            </p>
            <div className="text-center text-md-center">
              <Link 
                to="/detection-app" 
                className="btn mt-2 ms-4" 
                style={{ fontSize: '2rem', color: 'white', backgroundColor: '#7b2cbf', border: 'none' }}
              >
                Detect Now
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 my-4 img-thumbnail" style={{border : 'hidden', backgroundColor: '#222222' }}>
            <div id="deepfakeCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <img alt="Hai Kuch"
  src="https://owesh74.github.io/assets/DeepfakeDe.gif" 
  className="w-100" 
  style={{ border: '10px solid #7b2cbf', backgroundColor: 'transparent' }} 
/>


                </div>
              
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
    </div>
  );
};

export default HomePage;