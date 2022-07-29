import React, {useState} from "react";
import AppModal from "./Modal"

export default function Modal() {

    // BOTON MODAL
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);    
    }

    return(

                    <div className="d-flex justify-content-center">
                        <button className="bin btn-primary px-4 py-2 rounded" onClick={toggle}>Show Modal</button>
                        <AppModal visible={visible} toggle={toggle} />
                    </div>

 
    )
    
}
