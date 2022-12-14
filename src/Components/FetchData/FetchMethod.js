import React, { useState, useEffect } from 'react'

function FetchMethod() {

  const [user, setUser] = useState([]);
  // console.log(user);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await response.json();
    console.log(data);
    return setUser(data); 
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>

        <h1>FetchData through FetchMethod</h1>
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

export default FetchMethod
