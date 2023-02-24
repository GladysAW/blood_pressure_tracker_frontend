import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btnState, setBtnState] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://blood-pressure-tracker-api-mern.onrender.com/entries"
      );
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{ data, error, loading, fetchData, btnState, setBtnState }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
