import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TeamCard from "../components/TeamCard";

function Teams() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/teams')
        .then((response) => response.json())
        .then((data) => setTeams(data))
    }, [])


    console.log(teams);

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Constructor Championship</h1>
                <br />
                {
                    teams.map((team) => (
                       <TeamCard name={team.name} key={team.id} points={team.points} principal={team.principal}/>
                    ))
                }
            </main>
        </div>
    )
}

export default Teams;