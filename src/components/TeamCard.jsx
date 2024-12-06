import React from "react";

function TeamCard({ name, points, principal }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Points: {points}</p>
            <p>Principal: {principal}</p>
        </div>
    )
}

export default TeamCard;