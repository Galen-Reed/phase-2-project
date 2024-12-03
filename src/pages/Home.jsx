import React from "react";
import NavBar from "../components/NavBar";
import DriverCard from "../components/DriverCard";

function Home() {

    return (
        <div>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Home</h1>
                <DriverCard />
            </main>
        </div>
    )

}

export default Home;