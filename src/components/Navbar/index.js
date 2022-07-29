import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import imgLogo from '../../images/logonavb.png';


export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img className="logo" src={imgLogo}></img>
      <div className="navbar__buttons">
=======
      <span onClick={() => navigate("/formulario")}>Registro</span>
      <span onClick={() => navigate("/ingreso")}>login</span>

        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/formulario-datos")}>Mis Datos</span>
        <span onClick={() => navigate("/formulario-video")}> Video</span>
        <span onClick={() => navigate("/edit")}>Editar</span>
        <span onClick={() => navigate("/ingreso")}>Login</span>
        <span onClick={() => navigate("/formulario")}>Registro</span>
        <span onClick={() => navigate("/Empresa")}>Descripcion Empresarial</span>
        <span onClick={() => navigate("/formulario_trabajo")}>Area Laboral</span>
        <span onClick={() => navigate("/empleo")}>Vacantes</span>



      </div>
    </div>
  );
}
