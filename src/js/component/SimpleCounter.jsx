import "../../styles/index.css";
import React, { useState, useEffect } from "react";

export const SimpleCounter = (props) => {
    const [counter, setCounter] = useState(0);

    /**
    Se inicia el useEffect aplicando un setInteval, que como FUNCION modificamos el setCounter del useState, aplicando al valor actual un +1.
    TODO lo guardamos en una constante llamada 'interval' para después reutilizarla
    Al setInterval le aplicamos el tiempo para ejecutarse.
    Con la función de js clearInterval detenemos el temporizador que iniciamos con setInterval.
     */

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
 /**
Con la función de js clearInterval detenemos el temporizador que iniciamos con setInterval.
 */   
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <span>
                        <i className="fa-solid fa-clock"></i>
                    </span>
                </div>
                <div className="col-1">
                    <div className="six">{Math.floor(counter / 100000) % 10}</div>
                </div>
                <div className="col-1">
                    <div className="five">{Math.floor(counter / 10000) % 10}</div>
                </div>
                <div className="col-1">
                    <div className="four">{Math.floor(counter / 1000) % 10}</div>
                </div>
                <div className="col-1">
                    <div className="three">{Math.floor(counter / 100) % 10}</div>
                </div>
                <div className="col-1">
                    <div className="two">{Math.floor(counter / 10) % 10}</div>
                </div>
                <div className="col-1">
                    <div className="one">{counter % 10}</div>
                </div>
            </div>
        </div>
    );
};

