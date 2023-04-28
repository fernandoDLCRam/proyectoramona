import React, { useEffect, useState } from "react";
import { RutaApi } from "../api/url";

const Itinerario = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    RutaApi.get("/itinerario").then((voto) => setData(voto.data[0]));
  }, []);
  return (
    <div className="center">
      <div className="card">
        <h2>Ven a nuestra fiesta para revelar el sexo del bebé</h2>
        <hr />
        <ol>
          {data.map((d) => {
            return (
              <li>
                <div className="cardlist ">
                  <div className="container">
                    <h4>
                      {d.titulo}: <br />
                      {d.hora}
                    </h4>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Itinerario;
