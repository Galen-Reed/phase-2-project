import React from "react";
import NavBar from "../components/NavBar";

function Home() {

    return (
        <div>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Home</h1>
            </main>
        </div>
    )

}

export default Home;