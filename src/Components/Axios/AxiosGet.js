import React, { useState, useEffect } from 'react'
import axios from 'axios';

function AxiosGet() {

  const [user, setUser] = useState([]);
  // console.log(user);

  const fetchData = async () => {
    const item = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(item.data);
    console.log(item.data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1>FetchData through AxiosGetMethod</h1>
      {
        user.map((comm) => (
          <ul>
            <li key={comm.id}>{comm.name}</li>
            <li>{comm.username}</li>
            <li>{comm.email}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default AxiosGet
