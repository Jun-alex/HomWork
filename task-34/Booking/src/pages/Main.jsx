import React from 'react';
import { BookingForm } from "../components/BookingForm/BookingForm.jsx";
import { Box, Typography } from '@mui/material';

const Main = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Book Your Stay
      </Typography>
      <BookingForm />
    </Box>
  );
};

export default Main;

