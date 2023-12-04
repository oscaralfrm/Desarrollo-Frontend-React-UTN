import React from "react";

function Saludo(props) {

    return (

        <div className="Saludo">
            <h1>Lista de Usuarios: </h1>
            <ul>
                <li>
                     ¡Hola, bienvenid@ {props.nombre1}!
                </li>

                <li>
                     ¡Hola, bienvenid@ {props.nombre2}!
                </li>

                <li>
                     ¡Hola, bienvenid@ {props.nombre3}!
                </li>

            </ul>
        </div>


    );

}


export default Saludo;