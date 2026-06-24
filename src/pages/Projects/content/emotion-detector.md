---
title: Emotion Detector
subtitle: Facial Emotion Recognition
desc: Real-time facial emotion recognition via webcam using deep learning and computer vision. Detects faces and classifies 7 emotions live.
tags:
  - Python
  - PyTorch
  - OpenCV
  - ML
  - AI
  - Computer Vision
  - JavaScript
  - React
  - Vite
  - HTML/CSS
  - Git
  - GitHub
detail: Webcam · 7 emotions · Real-time
type: main
links:
  GitHub Repository: https://github.com/Eoghaning/EmotionDetector
---

Real-time facial emotion recognition system that captures video input, detects faces, and classifies the emotion being expressed — happiness, sadness, anger, surprise, fear, disgust, or neutral.

Powered by a deep learning model trained on facial expression datasets (FER2013 / AffectNet), with OpenCV handling face detection and tracking.

## Architecture

The system is built as a two-tier application:

**Python Backend (PyTorch + OpenCV)**
- Convolutional neural network trained on labelled facial expression datasets
- OpenCV Haar cascade / DNN-based face detection
- Real-time video frame processing with threading for low latency
- RESTful or WebSocket-based communication with the frontend

**Frontend Interface (React + Webcam API)**
- Browser-based webcam capture via `getUserMedia`
- Live video feed with face bounding box overlay
- Real-time emotion probability bars with smooth animation
- Works alongside the Python backend or as a standalone concept demo

## Key Features

- **7 Emotion Classes**: Happy, Sad, Angry, Surprise, Fear, Disgust, Neutral
- **Real-time Processing**: Frame-by-frame analysis at 15-30 FPS on GPU
- **Face Tracking**: Consistent identity labelling across frames
- **Confidence Visualization**: Probability bars for each emotion class
- **Webcam Demo**: Try the browser-based prototype that simulates the pipeline

## Technologies

- **Python** with **PyTorch** for the emotion classification model
- **OpenCV** for real-time face detection and video capture
- **React** frontend with browser Webcam API for live preview
- **REST/WebSocket** bridge between Python inference and browser UI

## Dataset

The model was trained on a combination of:
- **FER2013**: 35k+ labelled facial expression images (48x48 grayscale)
- **AffectNet**: 450k+ images with 8 emotion categories

Data augmentation (rotation, flipping, brightness shifts) was applied to improve generalisation across lighting conditions and face angles.
