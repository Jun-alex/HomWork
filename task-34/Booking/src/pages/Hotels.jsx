import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { fetchHotelsRequest } from '../components/actions/actions.js';
import { useNavigate } from 'react-router-dom';

const Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector((state) => state.hotels);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const submitStatus = useSelector((state) => state.submitStatus);

  useEffect(() => {
    if (submitStatus === 'success') {
      dispatch(fetchHotelsRequest());
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, submitStatus]);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Available Hotels
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error}</Typography>
      ) : (
        <Grid container spacing={2}>
          {hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{hotel.name}</Typography>
                  <Typography variant="body2">Address: {hotel.address}</Typography>
                  <Typography variant="body2">City: {hotel.city}</Typography>
                  <Typography variant="body2">State: {hotel.state}</Typography>
                  <Typography variant="body2">Country Code: {hotel.country_code}</Typography>
                  <Typography variant="body2">Rating: {hotel.hotel_rating}</Typography>
                  <Typography variant="body2">Phone: {hotel.phone_number}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Hotels;
