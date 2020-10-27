import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [testResponse, setTestResponse] = useState('');
  const [mongoHealth, setMongoHealth] = useState('fail');

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || '3002';
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log('API_BASE_ADDRESS: ', API_BASE_ADDRESS)

    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/test/`)
      setTestResponse(result.data);
    }

    fetchData();
    return () => {};
  })

  useEffect(() => {
  const checkHealth = async () => {
    const API_URL = process.env.REACT_APP_API_URL || 'localhost';
    const API_PORT = process.env.REACT_APP_API_PORT || '3002';
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log('API_BASE_ADDRESS: ', API_BASE_ADDRESS)

    const result = await axios(`${API_BASE_ADDRESS}/healthcheck/`)
      setMongoHealth(result.data);
    }

    checkHealth();
    return () => {};
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, even on Docker.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>The test response is: {testResponse}</p>
        <p>The Health Check: {mongoHealth.message}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
