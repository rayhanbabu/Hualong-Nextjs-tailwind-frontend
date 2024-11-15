"use client";
import { useState, useEffect } from "react";
import axios from "axios";
const base_url = "https://ss.ancovabd.com/api/6";
// Custom hook to fetch data
const useFetch = (path) => {
  const [data, setData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when the request is initiated
      setError(null); // Reset error before making a new request
      try {
        const response = await axios.get(base_url+path); // Make GET request
        setData(response.data); // Save response data to state
      } catch (err) {
        setError(err.message || "An error occurred"); // Set error if request fails
      } finally {
        setLoading(false); // Set loading to false when request is completed
      }
    };

    fetchData(); // Call the function to fetch data
  }, [path]); // Re-fetch data when URL changes

  return { data, loading, error }; // Return the state values
};

export default useFetch;
