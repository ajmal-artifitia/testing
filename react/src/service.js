import axios from "axios";
const host = "http://localhost:8000";

export const qrGenerate = async (url) => {
  try {
    const { data } = await axios.post(`${host}/qrGenerate`, { url: url });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const fetchPrinter = async (url) => {
  try {
    const { data } = await axios.get(`${host}/fetchPrinter`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
