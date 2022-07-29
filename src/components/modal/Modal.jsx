import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css"

const AppModal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
  
  <div className="myModal">
    <div className="myModal-pop" role="dialog" aria-modal="true">
      
      <h3> Bienvenido </h3>

      <p> Su cuenta fue creada con exito.</p>
      <button className="btn btn-primary" type="button" onClick={toggle}>Close</button>
    
    </div>  

    <div className="myModal-overlay"></div>   

  </div>, document.body
) : null;

export default AppModal;