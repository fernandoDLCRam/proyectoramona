import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { RutaApi } from "../api/url";
import "reactjs-popup/dist/index.css";
import SiluetaPooh from "../assets/pooh_Silueta.png";
import ImagenLadoIzquierdo from "../assets/Piglet.png"; // Agrega la imagen izquierda
import { useNavigate } from "react-router-dom";

const Itinerario = () => {

  const [invitados, setInvitados] = useState([]);
  const oNavigate = useNavigate();

  useEffect(() => {
    //NOTE: Endpoint para obtener a todos los invitados, de ser necesario cambiar "/invitados"
    // por el endpoint necesario====================================
    RutaApi.get("/invitados").then((response) => {
      setInvitados(response.data);
    });
  }, []);

  return (
    <div className="center">
      <h3>INVITADOS CONFIRMADOS!</h3>
      <img src={SiluetaPooh} alt="Final"/>
      <hr />
      <div className="table-with-images">
        <img src={ImagenLadoIzquierdo} alt="Izquierda" className="side-image left inverted-image-horizontal" />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {
                  //ENCABEZADOS DE LA TABLA
                }
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {invitados.map((inv, index) => (
                //NOTE: .map es un Foreach, en este punto se despliegan los datos de los objetos
                // obtenidos del .get /invitados
                <tr key={index}>
                  <td>{inv.nombre}</td>
                  <td>{inv.correo}</td>
                  <td>{inv.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img src={ImagenLadoIzquierdo} alt="Derecha" className="side-image right" />
      </div>
      <div>
        <button onClick={() => oNavigate("/")}>VOLVER</button>
      </div>
    </div>
  );
};

export default Itinerario;
