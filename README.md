# Front-end App Documentation

## Overview

The front-end app is an interface that allows users to visualize shadow data retrieved from a MongoDB database. It serves as a flexible and beneficial user interface for plotting different types of graphs based on shadow analysis results.

## How to Use

1. **Shadow Data Input:**
   - Enter the MongoDB Document ID for the shadow analysis data you want to visualize in the "Enter MongoDB Document ID" field.

2. **Color Map Selection:**
   - Choose a color map from the dropdown list in the "Select Color Map" field. Available color maps include:
     - viridis
     - plasma
     - inferno
     - magma
     - cividis
     - cool
     - hot
     - coolwarm

3. **Visualization:**
   - Click the "Visualize" button to initiate the visualization process.

4. **Visualization Output:**
   - Once the visualization process is complete, the shadow analysis result will be displayed in the designated area.

## Code Structure

The front-end app is built using React and utilizes Material-UI components for the user interface. Key components and their functionalities include:

- `LandingPage.js`: The main component that handles user input and triggers the visualization process.

## Usage

To use the front-end app locally or integrate it into your project, follow these steps:

1. Clone the repository to your local machine:
```
git@github.com:shreyasskasetty-tamu/shadow_analysis_visualization.git
```
2. Navigate to the `shadow-analysis-app` directory:
```
cd shadow-analysis-app
```
3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```
The app should be accessible at `http://localhost:3000/shadow_analysis_visualization` in your web browser.

## Screenshots

<img width="1512" alt="Screenshot 2023-10-17 at 4 02 29 AM" src="https://github.com/shreyasskasetty-tamu/shadow_analysis_visualization/assets/142867885/6323283f-dff4-4569-b5c4-9ee987f91a54">

## Demo







