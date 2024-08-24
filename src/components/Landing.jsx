import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { RutaApi } from "../api/url";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BabyPooh from "../assets/baby_tigger.png";
import OldPooh from "../assets/babyPoohColor.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [invitados, setInvitados] = useState([]);
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "" });
  const [emailExists, setEmailExists] = useState(false);
  const oNavigate = useNavigate();

  useEffect(() => {
    RutaApi.get("/invitados").then((response) => {
      setInvitados(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = invitados.some((inv) => inv.correo === form.correo);

    if (found) {
      setEmailExists(true);
    } else {
      //NOTE: /asistencia es el Endpoint para hacer POST del formulario rellenado en la pagina
      RutaApi.post("/asistencia", form).then(() => {
        alert("¡Gracias por confirmar tu asistencia!");
        setEmailExists(false);
        setForm({ nombre: "", correo: "", telefono: "" });
      });
    }
  };

  return (
    <div className="center">
      <div className="title-with-images">
        <img src={BabyPooh} alt="Inicio" className="title-image" />
        <h2>ASISTE AL BAUTIZO DE MI HIJO!</h2>
        <img src={OldPooh} alt="Inicio" className="title-image" />
        
      </div>
     
      <hr />
      
      <div className="card">
      <div>
          <button
            onClick={() => {
              oNavigate("/itinerario");
            }}
          >
            INVITADOS
          </button>
        </div>
        <Popup
          trigger={<button>ASISTIRE!</button>}
          modal
          contentStyle={{
            background: "transparent",
            border: "none",
            padding: 0,
          }}
          overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div style={popupStyle}>
            <h3>Confirma tu asistencia</h3>
            {emailExists && (
              <p style={{ color: "red" }}>El correo ya está registrado.</p>
            )}
            <form onSubmit={handleSubmit} style={formStyle}>
              <label style={labelStyle}>
                Nombre completo:
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>
                Correo:
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </label>
              <label style={labelStyle}>
                Teléfono:
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </label>
              <button type="submit" style={buttonStyle}>
                Confirmar asistencia
              </button>
            </form>
          </div>
        </Popup>
      </div>

      <div>
        <h3>Ubicación:</h3>
        <iframe
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "300px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3433518945766!2d-117.03589268481029!3d32.519964981081065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d948d4d305d289%3A0xc69b7c7e05c6f715!2sMonte%20Alif%C3%A1n%2C%20Loma%20Dorada%2C%2022214%20Tijuana%2C%20B.C.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1680094788452!5m2!1sen!2sus"
        ></iframe>
      </div>
    
    </div>
  );
};


const popupStyle = {
  backgroundColor: "#d8fffe",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "90%",
  maxWidth: "400px",
  margin: "0 auto",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const labelStyle = {
  marginBottom: "10px",
  textAlign: "left",
  width: "100%",
};

const inputStyle = {
  padding: "8px",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#ff6d6d",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Landing;
