import React, { useEffect, useState } from "react";
import { RutaApi } from "../api/url";

const Itinerario = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    RutaApi.get("/itinerario").then((voto) => setData(voto.data[0]));
  }, []);
  console.log(data);
  return (
    <div className="center">
      <h2>Ven a nuestra fiesta para revelar el sexo del bebé</h2>
      <hr />

      <div className="card">
        <ol>
          {data.map((d) => {
            return (
              <li>
                <div className="cardlist">
                  <div className="container">
                    <h3>
                      {d.titulo}: <br />
                      {d.hora}
                    </h3>
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
