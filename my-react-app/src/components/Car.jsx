import React from 'react'

export default function Car() {

    const [carBrand, setCarBrand] = React.useState("Ferrari");
    const [speed, setSpeed] = React.useState('120 km/h');

return (
    <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '16px', 
            maxWidth: '300px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            margin: '16px auto', 
            textAlign: 'center' 
    }}>
            <h1>🚗</h1>
            <p>Brand: {carBrand}</p>
            <p>Speed: {speed} km/h</p>
    </div>
)
}
