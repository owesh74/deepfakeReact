# DeepFake Detector 🛡️

A web application for detecting deepfake images using Flask backend and React frontend.

## Features

- Upload images via drag & drop or file browser
- Real-time deepfake detection with confidence scores
- Detailed analysis metrics (noise, brightness, edge density)
- Responsive React interface with Bootstrap

## 🚀 Live Demo

**[View Live Application](https://deep-fake-detector-owesh74s-projects.vercel.app/)**

*Try the app without installation - your tasks will be saved locally in your browser!*
 
## Tech Stack

**Backend:** Flask, PIL, NumPy, Flask-CORS  
**Frontend:** React, Bootstrap, React Router

## Setup

### Backend (Separate Repository)
The backend is hosted in a separate repository. 

**Backend Repository**: [Link to Backend Repo](https://github.com/your-username/deepfake-backend)

For local development:
```bash
git clone <https://github.com/owesh74/deepfakeflask.git>
cd deepfakeflask
pip install flask flask-cors pillow numpy
python app.py
```
Runs on `http://localhost:5000`

### Frontend
```bash
git clone <https://github.com/owesh74/deepfakeReact.git>
cd deepfakeReact
npm install react react-dom react-router-dom bootstrap
npm start
```
Runs on `http://localhost:3000`

**Note**: Update the API URL in frontend code to use local backend:
```javascript
// Change from production URL to local
const response = await fetch('http://127.0.0.1:5000/upload_image', {
```

## API Endpoints

- `POST /upload_image` - Analyze image for deepfakes

## Detection Algorithm

Analyzes images using:
- Noise level (pixel standard deviation)
- Average brightness
- Edge density

Flags as deepfake if ≥2 suspicious markers detected.

## Usage

1. Upload an image
2. Click "Check Image"
3. View results with confidence score
4. Toggle "Show Details" for technical metrics
 