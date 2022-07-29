import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"

let urlApi = "https://jsonplaceholder.typicode.com/users/";

export const Edit = () => {
  const navigate = useNavigate();
  // Parametro url
  const { id } = useParams();
  // User values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [data, setData] = useState(null);
  
  
  const getUser = async () => {
    setError(false); // Si teniamos algún error previamente
    setLoading(true); // Activamos la pantalla de carga
    // Hacemos la llamada a nuestro backend
    fetch(urlApi + id)
      // Then en Javascript es para "entonces"
      .then((response) => {
        // Tomamos la respuesta del backend (es la response)
        if (response.ok) {
          // Si la respuesta es correcta
          // Regresamos la info transformada a json
          return response.json();
        } else {
          // Si no es correcta, ponemos nuestro error en true
          setError(true);
          // Quitamos la carga
          setLoading(false);
          // Regresamos el error por default
          return new Error(response.data);
        }
      })
      .then((data) => {
        // Entonces si todo ha salido bien podemos trabajar con la data del backend
        // Quitamos la carga
        setLoading(false);
        // Guardamos la info
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => {
        // Si tenemos algún error en nuestro codigo guardamos el error
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);
  return (
    <div className="page__container">
      {loading ? (
        <span>Cargando...</span>
      ) : error ? (
        <span>Ha ocurrido un error</span>
      ) : (
        <>
          <h1></h1>
          <span></span>
          <form
            onSubmit={() => {
              navigate("/");
            }}
          >
           
            <input
              type="text"
              name="name"
              placeholder="Empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="name"></label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="name"></label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <button type="submit">Enviar</button>
          </form>
        </>
      )}
    </div>
  );
};
