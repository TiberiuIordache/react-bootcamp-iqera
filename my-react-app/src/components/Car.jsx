import React from 'react'

export default function Car() {

    const [carBrand, setCarBrand] = React.useState("Ferrari");
    const [speed, setSpeed] = React.useState(120);

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
                <div>
                    <label>
                        Brand: 
                        <input 
                            type="text" 
                            value={carBrand} 
                            onChange={(e) => setCarBrand(e.target.value)} 
                            style={{ margin: '8px 0', padding: '4px', width: '100%' }}
                        />
                    </label>
                    <label>
                        Speed: 
                        <input 
                            type="number" 
                            value={speed} 
                            onChange={(e) => setSpeed(e.target.value)} 
                            style={{ margin: '8px 0', padding: '4px', width: '100%' }}
                        />
                    </label>
                </div>
                <p>Brand: {carBrand} </p>
                <p>Speed: {speed} km/h</p>
        </div>
    )
}
