import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Circuits() {

    const [circuitData, setCircuitData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/gp_circuits')
        .then((response) => response.json())
        .then((data) => setCircuitData(data))
    },[])


    return (
        <div>
            <header>
                <NavBar />
            </header>
            {
                circuitData.map((circuit) => (
                    <main>
                        <h2>{circuit.name} Grand Prix</h2>
                        <p>{circuit.location}</p>
                        <a href={circuit.link} rel="noreferrer" target="_blank">Learn more about the {circuit.name} Grand Prix</a>
                    </main>
                ))
            }
        </div>
    )
}

export default Circuits;