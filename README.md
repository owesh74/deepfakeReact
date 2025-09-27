Deepfake & Fake News Detector
A full-stack web application designed to detect deepfake images and analyze text for fake news. The project features a React frontend for a seamless user experience and a Python Flask backend for processing and analysis.

Table of Contents
Features

Technology Stack

How It Works

API Endpoints

Getting Started

Prerequisites

Backend Setup

Frontend Setup

Usage

Future Improvements

Features
Deepfake Image Detection: Upload an image through a simple drag-and-drop interface or file selector.

Statistical Image Analysis: The backend uses a heuristic approach to analyze image properties like noise level, brightness, and edge density to identify potential manipulations.

Instant Feedback: Receive a clear result indicating whether an image is likely authentic or a deepfake, complete with a confidence score.

Detailed Analysis: View the specific metrics used in the analysis for a more in-depth understanding.

Fake News API (Placeholder): Includes a foundational API endpoint for future implementation of a text-based fake news detection model.

Technology Stack
Frontend: React, React Router, Bootstrap, CSS

Backend: Python, Flask, Flask-CORS

Image Processing: Pillow (PIL), NumPy

How It Works
The application is split into two main parts: a frontend client and a backend server.

Image Upload: The user uploads an image on the React frontend. The image is converted to a base64 string.

API Request: The frontend sends the base64 string to the /upload_image endpoint on the Flask backend.

Backend Analysis:

The backend decodes the image and converts it into a NumPy array.

It calculates several basic statistical metrics:

Noise Level: The standard deviation of pixel values.

Average Brightness: The mean of all pixel values.

Edge Density: The standard deviation of the image's gradient.

It uses a simple rule-based system to check if these metrics cross predefined thresholds. An image is flagged as a potential deepfake if it triggers two or more suspicious markers.

Display Results: The analysis result is sent back to the React frontend and displayed to the user in a clean, easy-to-understand format.

Note: The current deepfake detection logic is based on statistical heuristics and is not a machine learning model. It serves as a proof-of-concept for basic image analysis.

API Endpoints
The Flask backend provides the following endpoints:

GET /
Description: A root endpoint to check if the API is running.

Response:

JSON

"Fake News & Deepfake Detection API is running!"
POST /detect_fake_news
Description: A placeholder endpoint for detecting fake news from a text input.

Request Body:

JSON

{
    "text": "This is a news article text..."
}
Success Response:

JSON

{
    "text": "This is a news article text...",
    "is_fake": false,
    "confidence": 0.85
}
POST /upload_image
Description: Analyzes an uploaded image for deepfake characteristics.

Request Body:

JSON

{
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
}
Success Response:

JSON

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
Error Response:

JSON

{
  "error": "Image analysis failed: ...",
  "is_deepfake": null,
  "confidence": 0
}
Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Python 3.7+

Node.js and npm

Backend Setup
Clone the repository:

Bash

git clone <your-repository-url>
cd <your-repository-url>/backend-folder
Create a virtual environment:

Bash

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install dependencies:
Create a requirements.txt file with the following content:

Flask
Flask-Cors
Pillow
numpy
Then run:

Bash

pip install -r requirements.txt
Run the Flask server:

Bash

python app.py
The backend will be running at http://127.0.0.1:5000.

Frontend Setup
Navigate to the frontend directory:

Bash

cd ../frontend-folder
Install npm packages:

Bash

npm install
Start the React development server:

Bash

npm start
The application will open in your browser at http://localhost:3000.

Note: The frontend code is configured to make API calls to a deployed backend. To use your local backend, you'll need to change the fetch URL in the FileUploader.js component to http://127.0.0.1:5000/upload_image.

Usage
Navigate to the Detection App page.

Drag and drop an image file onto the designated area or click "browse file" to select an image from your device.

An image preview will be displayed.

Click the "Check Image" button to start the analysis.

The result will be displayed below the button, indicating whether the image is authentic or a potential deepfake.

Click "Show Details" to see the raw JSON data from the analysis.

Future Improvements
[ ] Integrate a Machine Learning Model: Replace the heuristic-based detection with a robust deep learning model (e.g., a CNN like EfficientNet or ResNet) for higher accuracy.

[ ] Implement Fake News Detection: Develop the fake news functionality using NLP models (e.g., BERT, TF-IDF with Logistic Regression) to analyze text.

[ ] Enhance UI/UX: Improve the user interface and add more visual feedback during the analysis process.

[ ] Add Video Support: Extend the functionality to allow users to upload and analyze video files for deepfakes.