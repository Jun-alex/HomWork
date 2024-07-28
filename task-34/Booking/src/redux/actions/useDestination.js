import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function useDestination() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:3000/hotels', values);
      navigate('/hotels');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/destination');
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    items,
    loading,
    handleSubmit,
  };
}
