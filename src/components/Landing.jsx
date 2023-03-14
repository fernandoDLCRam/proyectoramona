import React from "react";
import nino from "../assets/nino.svg";
import nina from "../assets/nina.svg";
import "../styles/App.css";
// import { useNavigate } from "react-router-dom";

const Landing = () => {
  // const oNavigate = useNavigate();
  const clickAsistencia = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=526644826271&text=Confirmo asistencia",
      "_blank"
    );
  };
  const clickUbicacion = () => {
    window.open("https://goo.gl/maps/QXRnMq3eThEkQXXV8", "_blank");
  };
  // const clickBoy = () => {
  //   oNavigate("/grafico");
  // };
  // const clickGirl = () => {
  //   oNavigate("/grafico");
  // };
  return (
    <div className="center">
      <div>
        <a target="_blank">
          <img src={nino} className="logo" alt="React logo" />
        </a>
        <a target="_blank">
          <img src={nina} className="logo" alt="React logo" />
        </a>
      </div>
      <h2>Ven a nuestra fiesta para revelar el sexo del bebé</h2>
      <hr />

      <div className="card">
        <div>
          <button onClick={clickUbicacion}>Consultar Ubicación</button>
        </div>
        <div>
          <button onClick={clickAsistencia}>Confirmar asistencia</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
