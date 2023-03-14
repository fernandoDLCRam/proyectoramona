import React, { useState } from "react";
import nino from "../assets/nino.svg";
import nina from "../assets/nina.svg";
import oJson from "../data/votacion.json";
import "../App.css";
import { useNavigate } from "react-router-dom";
// window.open("https://goo.gl/maps/QXRnMq3eThEkQXXV8", "_blank")

const Landing = () => {
  const oNavigate = useNavigate();
  const clickBoy = () => {
    oNavigate("/grafico");
  };
  const clickGirl = () => {
    oNavigate("/grafico");
  };
  return (
    <div className="center">
      <h2>Vota seleccionando un icono</h2>
      <div className="">
        <a href="https://goo.gl/maps/QXRnMq3eThEkQXXV8" target="_blank">
          <img src={nino} className="logo" alt="React logo" />
        </a>
        <a href="https://goo.gl/maps/QXRnMq3eThEkQXXV8" target="_blank">
          <img src={nina} className="logo" alt="React logo" />
        </a>
      </div>
      <h2>Ven a nuestra fiesta para revelar el sexo del bebé</h2>

      <hr />

      <div className="card">
        <div>
          <button onClick={clickBoy}>Consultar Ubicación</button>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=526644826271&text=Confirmo asistencia",
                "_blank"
              )
            }
          >
            Confirmar asistencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
