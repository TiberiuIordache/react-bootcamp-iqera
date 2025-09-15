import React from 'react'

interface UserCardProps {
    name: string;
    lname: string;
    age: string;
    email: string;
    address: string;
    phone: string;
}

export default function UserCard({name, lname, age, email, address, phone}: UserCardProps) {
return (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    }}>
        <h2 style={{ marginBottom: '8px', color: '#333' }}>{name} {lname}</h2>
        <div style={{ margin: '4px 0', color: '#555' }}><strong>Age:</strong> {age}</div>
        <div style={{ margin: '4px 0', color: '#555' }}><strong>Email:</strong> {email}</div>
        <div style={{ margin: '4px 0', color: '#555' }}><strong>Address:</strong> {address}</div>
        <div style={{ margin: '4px 0', color: '#555' }}><strong>Phone:</strong> {phone}</div>
    </div>
)
}
