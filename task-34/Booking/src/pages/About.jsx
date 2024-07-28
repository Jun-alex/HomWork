import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our booking application! We offer a wide range of hotels and accommodations to suit your needs. Our platform allows you to easily search and book your stay in various destinations.
      </Typography>
    </Box>
  );
};

export default About;
