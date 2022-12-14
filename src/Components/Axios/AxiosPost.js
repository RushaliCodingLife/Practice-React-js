import axios from "axios";
import React, { useState } from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function AxiosPost() {
    const [user, setUser] = useState([]);

    React.useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setUser(response.data);
        });
    }, []);

    function createPost() {
        axios.post(baseURL, {
            title: "Hello World!",
            body: "This is a new post."
        })
            .then((response) => {
                setUser(response.data);
                console.log(response.data);
            });
    }


    return (
        <div>
            <h1>FetchData through AxiosPostMethod & AxiosGetMethod</h1>
            <h1>{user.id}</h1>
            <p>{user.name}</p>
            <h1>{user.title}</h1>
            <p>{user.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
}