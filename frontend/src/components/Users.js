// src/components/Users.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header'; 


const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:3001/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return ( 
  <div className="font-semibold">
      <Header/>
    <div className="text-center mt-10"> 
      <h2 className="text-3xl ">Users</h2>
    </div>
      <div className="text-center mt-8 "> 
      <ul className="text-left inline-block">
        {users.map(user => (
          <li key={user.id} className="text-2xl m-10" >
              <Link to={`/user-spots/${user.id}`} >{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Users;