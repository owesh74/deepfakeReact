import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#1e1e1e', color: 'white', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', textAlign: 'left' }}>
        <h1 style={{ color: '#7b2cbf' }}>About Our Deepfake Detection System</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
          Our deepfake detection system is a web service built using Flask, and it checks images to see if they’re manipulated or fake (i.e., deepfakes). 
        </p>
        <p style={{ fontSize: '1.2rem' }}>
          This project was created by Owesh Khan.
        </p>
        <h2 style={{ color: '#7b2cbf' }}>Web Server with Flask:</h2>
        <p style={{ fontSize: '1.2rem' }}>
          The system runs a Flask server. This allows us to handle incoming image requests through the web. We also enable CORS so that other web applications (like the frontend) can safely send images to our server.
        </p>
        <h2 style={{ color: '#7b2cbf' }}>Image Processing:</h2>
        <p style={{ fontSize: '1.2rem' }}>
          When an image is uploaded, it’s in base64 format (this is a way of encoding images for safe transmission over the web). We decode the base64 data and turn it into an image. Then, we convert that image into an array (using NumPy), so we can analyze the pixel data and extract information from it.
        </p>
        <h2 style={{ color: '#7b2cbf' }}>Detecting Fake Features:</h2>
        <p style={{ fontSize: '1.2rem' }}>
          We analyze the image based on three key features that are often found in deepfakes:
        </p>
        <ul style={{ fontSize: '1.2rem' }}>
          <li><strong>Noise Level:</strong> Images with random noise (like pixelated artifacts) often show up in deepfakes. We measure how much noise is in the image. Higher noise levels mean the image might be fake.</li>
          <li><strong>Brightness:</strong> Deepfake images sometimes have unusual brightness or lighting. We check the image’s brightness and flag it if it looks off.</li>
          <li><strong>Edge Sharpness:</strong> Real images have clear edges (think of the outline of a face or an object). Fake images often have blurry or poorly-defined edges. We measure the sharpness of edges to check for this.</li>
        </ul>
        <h2 style={{ color: '#7b2cbf' }}>Making the Decision:</h2>
        <p style={{ fontSize: '1.2rem' }}>
          The system combines these checks. If two or more features (noise, brightness, edge sharpness) are abnormal, the system raises a flag and marks the image as a deepfake.
        </p>
        <h2 style={{ color: '#7b2cbf' }}>Result:</h2>
        <p style={{ fontSize: '1.2rem' }}>
          Finally, the system gives a result—either the image is real or it’s a deepfake based on the analysis.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;