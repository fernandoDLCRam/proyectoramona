import axios from "axios";

export const RutaApi = axios.create({
  baseURL: "http://ec2-3-101-78-42.us-west-1.compute.amazonaws.com",
});
