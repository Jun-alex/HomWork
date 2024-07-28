import React from 'react';
import { Button } from "../Button/index.jsx";
import { Box, Typography } from '@mui/material';

export function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Typography variant="h4">Booking</Typography>
      <Box>
        <Button reactHref="/" color="#fff" sx={{ marginRight: '10px' }}>Main</Button>
        <Button reactHref="/about" color="#fff">About</Button>
      </Box>
    </Box>
  );
}
