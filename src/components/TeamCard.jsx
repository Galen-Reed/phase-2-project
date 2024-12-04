import React from "react";

function TeamCard({ name, points, principal }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{points} pts</p>
            <p>{principal}</p>
        </div>
    )
}

export default TeamCard;