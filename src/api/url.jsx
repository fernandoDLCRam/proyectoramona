import axios from "axios";

export const RutaApi = axios.create({
  //NOTE: Aqui va la URL de la API, cambiar el string por la URL a utilizar
  baseURL: "http://ec2-3-101-78-42.us-west-1.compute.amazonaws.com",
});
