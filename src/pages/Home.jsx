import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import DriverCard from "../components/DriverCard";

function Home() {

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/drivers')
            .then((response) => response.json())
            .then((data) => setDrivers(data))
    }, [])


    return (
        <div>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Home</h1>
                {drivers.map((driver) => (
                    <DriverCard key={driver.id} name={driver.name} points={driver.points} nationality={driver.nationality}/>
                ))}
            </main>
        </div>
    )

}

export default Home;