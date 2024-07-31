import { useSelector, useDispatch } from "react-redux";
import { fetchDestinations } from "../redux/actions/actions.js";
import {useEffect} from "react";
import {fetchHotelsRequest} from "../redux/actions/actions.js";
import {setFormValues} from "../redux/slices/formSlice.js";

export function useDestination() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.destination.items);
  const loading = useSelector(state => state.destination.loading);

  const handleSubmit = (formValues) => {
    const formattedValues = {
      ...formValues,
      check_in: new Date(formValues.check_in).toLocaleString(),
      check_out: new Date(formValues.check_out).toLocaleString(),
    };
    dispatch(setFormValues(formattedValues));
    dispatch(fetchHotelsRequest(formattedValues));
  };

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return { items, loading, handleSubmit };
}
