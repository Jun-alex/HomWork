import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchDestinations, submitDestination } from "./actions.js";

export function useDestination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitStatus = useSelector(state => state.submitStatus);
  const items = useSelector(state => state.destination);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(submitDestination(values));
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      navigate('/hotels');
    } else if (submitStatus === 'failure') {
      console.error('Failed to submit destination');
    }
  }, [submitStatus, navigate]);

  return {
    items,
    loading,
    handleSubmit
  };
}
