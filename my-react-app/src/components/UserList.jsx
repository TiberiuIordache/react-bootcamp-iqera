import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

const users = [
  { id: 1, name: 'Anna', age: 28, city: 'Milano' },
  { id: 2, name: 'Luca', age: 34, city: 'Roma' },
  { id: 3, name: 'Sara', age: 22, city: 'Torino' },
  { id: 4, name: 'Marco', age: 40, city: 'Napoli' },
];

function UserList() {
  return (
    <div className="user-list table-row">
      {users.map(user => (
        <UserCard className="row-number" key={user.id} name={user.name} age={user.age} city={user.city} />
      ))}
    </div>
  );
}

export default UserList;