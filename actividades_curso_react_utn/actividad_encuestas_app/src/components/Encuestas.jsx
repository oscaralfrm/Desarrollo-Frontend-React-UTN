import React from "react";
import Usuario from "./Usuario";


function Encuestas( {encuestas} ) {

return (

    <div>

        <Usuario nombre="Oscar"/>

        <h2>Encuestas Disponibles: </h2>

        <ul>

            {encuestas.map(encuesta => (
                <li key={encuesta.id}> {encuesta.pregunta}

                     <div>{encuesta.opciones}</div>
                     
                </li>
            ))}

        </ul>

    </div>


);

} 

export default Encuestas;