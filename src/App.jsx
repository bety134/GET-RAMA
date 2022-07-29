import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit, FormularioVideo, Home, HomeCreate} from "pages";
import { FormExample } from "pages/formExample";
import Navbar from "components/Navbar";
import "./App.css";

import {RegistrationForm} from "pages/formulario_registro";
import {Ingreso} from "pages/fornulario_ingreso";
import {FormularioDatos} from "pages/formulario_datos";
import {Datos } from "pages/Empresa/Perfil";
import { Trabajo} from "pages/formulario_trabajo/area";
import{Laboral} from "./pages/Empleos/Descripcion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/home-create/" element={<HomeCreate />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/formulario" element={<RegistrationForm/>} />
        <Route path="/ingreso" element={<Ingreso/>} />
        <Route path="/formulario-datos" element={<FormularioDatos/>} />
        <Route path="/formulario-video" element={<FormularioVideo/>} />
        <Route path="/Empresa" element={<Datos/>} />
        <Route path="/formulario_trabajo" element={<Trabajo/>} />
        <Route path="/empleo" element={<Laboral/>} />


      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
