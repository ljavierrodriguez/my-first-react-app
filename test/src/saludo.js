import React from 'react';
import PropTypes from 'prop-types';

function Saludo(props) {
    return <h3 className="saludo">Hola {props.name} {props.lastname}</h3>;
}

Saludo.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
}

export function Mensaje(props){
    return (
        <h3 className="mensaje">
            <span style={{
                backgroundColor: "#cccccc",
                color: "#000"
            }}>
                Mensaje:
            </span> 
            {props.mensaje}
        </h3>
    )
}

export default Saludo;