import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetectionApp from './components/DetectionApp';
import AboutPage from './components/AboutPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detection-app" element={<DetectionApp />} />
          <Route path="/About-app" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;