import axios from "axios";

const baseUrl = "http://creative-crimson.eddypermana.com/kasir-app/";

const api = axios.create({
  baseURL: baseUrl,
  responseType: "json",
});

export default api;
