import axios from "axios";

export const RutaApi = axios.create({
  //NOTE: Aqui va la URL de la API, cambiar el string por la URL a utilizar
  baseURL: "http://localhost:4000/",
});
