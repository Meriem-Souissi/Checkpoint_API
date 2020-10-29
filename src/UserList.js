import React, { useState, useEffect } from 'react'
import axios from "axios"

const UserList = () => {

    const [users, setUsers] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers({ hits: result.data });
        };
        fetchData();
    }, []);

    return (
        <>
            <ul>
                {users.hits.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList
