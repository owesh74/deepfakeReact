# Deepfake & Fake News Detector 🛡️

A full-stack web application designed to detect deepfake images and analyze text for fake news. Features a React frontend and Python Flask backend for processing and analysis.

## Features

- **Deepfake Image Detection**: Upload images via drag-and-drop or file selector
- **Statistical Image Analysis**: Analyzes noise level, brightness, and edge density
- **Instant Feedback**: Clear results with confidence scores
- **Detailed Analysis**: View specific metrics used in analysis
- **Fake News API**: Foundational endpoint for future text analysis

## Technology Stack

- **Frontend**: React, React Router, Bootstrap, CSS
- **Backend**: Python, Flask, Flask-CORS
- **Image Processing**: Pillow (PIL), NumPy

## How It Works

1. **Image Upload**: User uploads image, converted to base64 string
2. **API Request**: Frontend sends base64 to Flask backend
3. **Backend Analysis**:
   - Decodes image to NumPy array
   - Calculates statistical metrics:
     - **Noise Level**: Standard deviation of pixel values
     - **Average Brightness**: Mean pixel intensity
     - **Edge Density**: Standard deviation of image gradient
   - Uses rule-based system with predefined thresholds
   - Flags as deepfake if ≥2 suspicious markers detected
4. **Display Results**: Analysis sent back to frontend

## API Endpoints

### `GET /`
Check if API is running
```json
"Fake News & Deepfake Detection API is running!"
```

### `POST /detect_fake_news`
Analyze text for fake news (placeholder)
```json
{
  "text": "This is a news article text..."
}
```

### `POST /upload_image`
Analyze image for deepfake characteristics
```json
{
  "image": "data:image/jpeg;base64,..."
}
```

**Response:**
```json
{
  "is_deepfake": true,
  "confidence": 0.7,
  "message": "Image analyzed successfully",
  "details": {
    "noise_level": 60.5,
    "brightness": 180.2,
    "edge_density": 8.1,
    "suspicious_markers": 2
  }
}
```

## Getting Started

### Prerequisites
- Python 3.7+
- Node.js and npm

### Backend Setup
```bash
git clone <repository-url>
cd backend-folder
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install Flask Flask-Cors Pillow numpy

# Run server
python app.py
```
Backend runs at `http://127.0.0.1:5000`

### Frontend Setup
```bash
cd frontend-folder
npm install
npm start
```
Frontend runs at `http://localhost:3000`

**Note**: Change fetch URL in `FileUploader.js` to `http://127.0.0.1:5000/upload_image` for local backend.

## Usage

1. Navigate to Detection App page
2. Drag & drop image or click "browse file"
3. Preview image appears
4. Click "Check Image" to analyze
5. View results (authentic/deepfake)
6. Click "Show Details" for raw analysis data

## Future Improvements

- [ ] **Machine Learning Model**: Replace heuristics with CNN (EfficientNet/ResNet)
- [ ] **Fake News Detection**: Implement NLP models (BERT, TF-IDF)
- [ ] **Enhanced UI/UX**: Improve interface and visual feedback
- [ ] **Video Support**: Extend to video deepfake detection

---

**Note**: Current detection uses statistical heuristics as proof-of-concept, not machine learning.