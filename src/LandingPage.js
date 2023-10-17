import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';

const colorMaps = ['viridis', 'plasma', 'inferno', 'magma', 'cividis', 'cool', 'hot', 'coolwarm'];

const LandingPage = () => {
  const [documentId, setDocumentId] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColorMap, setSelectedColorMap] = useState('viridis'); // Default color map

  const handleDocumentIdChange = (event) => {
    setDocumentId(event.target.value);
  };

  const handleColorMapChange = (event) => {
    setSelectedColorMap(event.target.value);
  };

  const handleVisualization = async () => {
    setIsLoading(true);
    try {
      // Send a POST request with the documentId and selectedColorMap in the request body
      const response = await axios.post(`https://ylj0v7tfp4.execute-api.us-east-1.amazonaws.com/v1/visualize-shadow`, {
        document_id: documentId,
        colormap: selectedColorMap,
      },
      {
        timeout: 60000, // Set the timeout here
      });

      const image_url = response.data; // Assuming your API response contains the image URL
      setImageUrl(image_url);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Shadow Analysis Visualization
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {isLoading ? (
          <BallTriangle
            color="#3498db"
            height={50}
            width={50}
          />
        ) : (
          <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
            <img
              src={image_url}
              alt="Shadow Map"
              style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }}
            />
          </div>
        )}
        {/* Document ID Input */}
        <TextField
          label="Enter MongoDB Document ID"
          variant="outlined"
          value={documentId}
          onChange={handleDocumentIdChange}
          fullWidth
          margin="normal"
        />
        {/* Color Map Selection */}
        <Select
          label="Select Color Map"
          value={selectedColorMap}
          onChange={handleColorMapChange}
          style={{ marginTop: '16px', width: '200px' }}
        >
          {colorMaps.map((map) => (
            <MenuItem key={map} value={map}>
              {map}
            </MenuItem>
          ))}
        </Select>
        {/* Visualization Buttons */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleVisualization}
          style={{ marginTop: '16px' }}
        >
          Visualize
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
