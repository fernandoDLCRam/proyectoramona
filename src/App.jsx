import { useState } from "react";
import "./App.css";
import nino from "./assets/nino.svg";
import nina from "./assets/nina.svg";
import BarChart from "./components/BarChart";

function App() {
  const [count, setCount] = useState(0);
  const clickBoy = () => {};
  const clickGirl = () => {};
  return (
    <div className="background-image">
      <div className="center">
        <div className="">
          <a href="https://goo.gl/maps/QXRnMq3eThEkQXXV8" target="_blank">
            <img src={nino} className="logo react" alt="React logo" />
          </a>
          <a href="https://goo.gl/maps/QXRnMq3eThEkQXXV8" target="_blank">
            <img src={nina} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2>Ven a nuestra fiesta para revelar el sexo del bebé</h2>

        <hr />

        <div className="card">
          <div>
            <button
              onClick={() =>
                window.open("https://goo.gl/maps/QXRnMq3eThEkQXXV8", "_blank")
              }
            >
              Consultar Ubicación
            </button>
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
    </div>
  );
}

export default App;
