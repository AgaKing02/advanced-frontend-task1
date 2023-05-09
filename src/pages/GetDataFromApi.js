import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import './../App.css';

const GetDataFromApi = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <ProgressBar
  height="80"
  width="100%"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
        </div>
      ) : (
        <div>
          <h1>User List</h1>
          {users.map((user) => (
            <div key={user.login.uuid}>
              <img src={user.picture.large} alt={user.name.first} />
              <p>Name: {user.name.first} {user.name.last}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetDataFromApi;
