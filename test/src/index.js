import React from 'react';
import ReactDOM from 'react-dom';
import Saludo, { Mensaje } from './saludo';
import * as func from './functions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
    console.log(func);
    console.log(func.sumar(3,4));
    console.log(func.restar(3,4));
    console.log(func.multiplicar(3,4));
    return (
        <>
            <div className="card" style={{width: "400px"}}>
                <div className="card-header">Titulo</div>
                <div className="card-body">Cuerpo</div>
                <div className="card-footer">Pie</div>
            </div>
            {func.IP}
            <h1>Hola Mundo desde React (2020)</h1>
            <Saludo name={"Luis"} lastname="Rodriguez" gender="Male" age="38" />
            <Mensaje mensaje={"Hola Chic@s suma: " + func.sumar(3, 5)} />
            <h3>{func.numRandom(5)}</h3>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));