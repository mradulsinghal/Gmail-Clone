import axios from "axios";

const API_URL = "http://localhost:8000/";

const API_GMAIL = async (urlobject, payload, type) => {
  
return await axios({
  method: urlobject.method,
  url: `${API_URL}${urlobject.endpoint}/${type || ""}`,
  data: payload,
});
};

export default API_GMAIL;



