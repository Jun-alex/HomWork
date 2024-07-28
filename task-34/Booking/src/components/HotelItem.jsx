import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function HotelItem(props) {
  const {address, city, countryCode, name, state} = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height="140" image='https://placehold.co/345x140' />
      <CardContent>
        <Typography component="h6" variant="h5" gutterBottom>{name}</Typography>
        <Typography component="span" gutterBottom>Address: {address}</Typography>
        <Typography component="span" gutterBottom>Country code: {countryCode}</Typography>
        <Typography component="span" gutterBottom>State: {state}</Typography>
        <Typography component="span" gutterBottom>City: {city}</Typography>
      </CardContent>
    </Card>
  )
}

HotelItem.propTypes = {
  address: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
};
