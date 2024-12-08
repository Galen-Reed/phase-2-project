import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import CircuitForm from "../components/CircuitForm";

function Circuits() {

    const [circuitData, setCircuitData] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:3001/gp_circuits')
        .then((response) => response.json())
        .then((data) => setCircuitData(data))
    },[])

    function handleNewCircuit(newCircuit) {
        setCircuitData([...circuitData, newCircuit])
    }

    return (
        <div className="app">
            <header>
                <NavBar />
            </header>
            <main>
                <h1 className="circuit-title">Grand Prix Circuits</h1>
                <div className="circuit-container">
                    {circuitData.map((circuit) => (
                        <div key={circuit.id}>
                            <h2>{circuit.name} Grand Prix</h2>
                            <p>{circuit.location}</p>
                            <a href={circuit.link} rel="noreferrer" target="_blank">Learn more about the {circuit.name} Grand Prix</a>
                        </div>
                    ))}
                </div>
            <CircuitForm addCircuit={handleNewCircuit}/>
            </main>
        </div>
    )
}

export default Circuits;