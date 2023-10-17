import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';

const LandingPage = () => {
  const [documentId, setDocumentId] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const handleDocumentIdChange = (event) => {
    setDocumentId(event.target.value);
  };

  const handleVisualization = async () => {
    setIsLoading(true);
    try {
        // Send a POST request with the documentId in the request body
        const response = await axios.post(`http://127.0.0.1:5001/api/v1/shadow_analysis/visualize-shadow-data`, {
          document_id: documentId,
          color_map: "viridis"
        });
  
        const image_url = response.data; // Assuming your API response contains timestamp and sh
        console.log(response)
        setImageUrl(image_url);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Shadow Analysis Visualization
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
      {isLoading ? (
          <BallTriangle // Choose the type of spinner animation
            color="#3498db" // Customize the spinner color
            height={50} // Set the spinner height
            width={50} // Set the spinner width
          />
        ):(
          <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
          <img
            src={image_url}
            alt="Shadow Map"
            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }}
          />
          </div>
        )
        }
        {/* Document ID Input */}
        <TextField
          label="Enter MongoDB Document ID"
          variant="outlined"
          value={documentId}
          onChange={handleDocumentIdChange}
          fullWidth
          margin="normal"
        />
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
