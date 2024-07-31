import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { fetchHotelsRequest } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: hotels, loading } = useSelector((state) => state.hotels);
  const error = useSelector((state) => state.error);
  const submitStatus = useSelector((state) => state.submitStatus);
  const form = useSelector((state) => state.form);

  useEffect(() => {
    if (!form || !form.isFilled) {
      navigate("/");
    } else if (submitStatus === "success") {
      dispatch(fetchHotelsRequest());
    } else if (submitStatus === "failure" || submitStatus === null) {
      navigate("/");
    }
  }, [dispatch, navigate, submitStatus, form]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Available Hotels
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error}</Typography>
      ) : (
        <Grid container spacing={2}>
          {hotels && hotels.length > 0 ? (
            hotels.map((hotel) => (
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
            ))
          ) : (
            <Typography>No hotels available</Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Hotels;
