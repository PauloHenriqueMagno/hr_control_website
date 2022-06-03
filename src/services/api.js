import axios from "axios";

const api = axios.create({
  baseURL: "https://app-hr-control.herokuapp.com/api"
});

export default api;
