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

    return (
        <div className="app">
            <header>
                <NavBar />
            </header>
            <main>
                <h1 className="team-title">Constructor Championship</h1>
                <div className='team-container'>
                    {
                        teams.map((team) => (
                        <TeamCard name={team.name} key={team.id} points={team.points} principal={team.principal}/>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Teams;