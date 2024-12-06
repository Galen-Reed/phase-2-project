import React, { useState } from "react";

function CircuitForm({ addCircuit }) {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        link: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3001/gp_circuits', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((newCircuit) => {
                addCircuit(newCircuit)
            });
        setFormData({ name: "", image: "", price: ""});
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            <h2>New Grand Prix</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Grand Prix Name" value={formData.name} onChange={handleChange}/>
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange}/>
                <input type="text" name="link" placeholder="Link for more info" value={formData.link} onChange={handleChange}/>
                <button type="submit">Add Grand Prix</button>
            </form>
        </div>
    )
}

export default CircuitForm;