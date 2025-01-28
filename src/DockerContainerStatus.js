import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DockerContainerStatus = () => {
    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:56160/GetAllDockerContainerConfiguration')
            .then(response => {
                console.log(response);
                setStatuses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the container statuses!', error);
            });
    }, []);

    return (
        <div>
            <h1>Docker Container Statuses</h1>
            <ul>
                {statuses.map((status, index) => (
                    <li key={index}>
                        <p>ID: {status.id}</p>
                        <p>State: {status.state}</p>
                        <p>Image: {status.image}</p>
                        <p>Name: {status.name}</p>
                        <p>Created: {new Date(status.created).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DockerContainerStatus;
