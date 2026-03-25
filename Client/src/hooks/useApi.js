import { useState } from "react";
import API_GMAIL from "../services/api.js";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const call = async (payload = {}, type = "") => {
    try {
      setLoading(true);
      const res = await API_GMAIL(urlObject, payload, type);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return { call, response, error, loading };
};

export default useApi;