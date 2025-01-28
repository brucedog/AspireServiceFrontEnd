import React from 'react';
import DockerContainerStatus from './DockerContainerStatus';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DockerContainerStatus />
            </header>
        </div>
    );
}

export default App;
