import React from 'react';

function UserCard({ name, age, city }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Età: {age}</p>
      <p>Città: {city}</p>
    </div>
  );
}

export default UserCard;
