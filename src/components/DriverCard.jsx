import React from "react"

function DriverCard({ name, nationality, points}) {


    return ( 
        <div>
            <h2>{name}</h2>
            <p>{points} pts</p>
            <p>{nationality}</p>
        </div>
    )
}

export default DriverCard;