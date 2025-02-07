import React, { useState, useRef } from 'react';
import '../DetectionApp.css';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files[0]);
    }
  };

  const handleFiles = (file) => {
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFiles(file);
  };

  const handleImageCheck = async () => {
    if (!selectedFile || !previewUrl) return;
    
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/upload_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: previewUrl
        }),
      });
      const data = await response.json();
      if (data.score) {
        data.score = data.score * 10;
      }
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Failed to process image' });
    }
    setLoading(false);
  };

  const renderResult = () => {
    if (!result) return null;

    const isFake = result.is_deepfake;
    const message = isFake ? 'This image appears to be a Deepfake' : 'This image appears to be authentic';

    return (
      <div className="results">
        <div className={`result-summary ${isFake ? 'result-fake' : 'result-safe'}`}>
          {message}
          {result.confidence && (
            <div className="confidence">
              Confidence: {(result.confidence * 100).toFixed(1)}%
            </div>
          )}
        </div>
        
        <button 
          className="details-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="details-section">
            <pre>
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="spectacledcoder-navbar">
        <div className="brand">
          <h1>DeepFake Detector</h1>
        </div>
        <ul>
          
        </ul>
      </div>

      <div className="section">
        <h2>Check Image for Deepfake</h2>
        <div
          className={`drag-file-area ${isDragging ? 'border-blue-500' : ''}`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <span className="material-icons-outlined upload-icon">
            {selectedFile ? ' ' : isDragging ? ' ' : ' '}
          </span>
          <h3 className="dynamic-message">
            {selectedFile 
              ? 'File Dropped Successfully!' 
              : isDragging 
                ? 'Drop your file here!' 
                : 'Drag & drop any file here'}
          </h3>
          <label className="label">
            or
            <span className="browse-files">
              <input
                type="file"
                className="default-file-input"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <span className="browse-files-text">browse file</span>
              <span>from device</span>
            </span>
          </label>
        </div>

        {previewUrl && (
          <div className="preview-container">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="preview-image"
            />
          </div>
        )}

        <button
          className="button"
          onClick={handleImageCheck}
          disabled={!selectedFile || loading}
        >
          {loading ? 'Checking...' : 'Check Image'}
        </button>
      </div>

      {renderResult()}

      <section className="hero">
        <div className="content">
        </div>
        <div className="waves"></div>
      </section>
    </div>
  );
};

export default FileUploader;