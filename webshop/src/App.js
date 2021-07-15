import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import api from './utils/api';

function App() {
  /*
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

  */
  useEffect(() => {
    //Product data
    const myProduct = {
      id: 8,
      name: 'Icecream Vanilla',
      description: 'A nice cool icecream',
      price: 1.50
    }
    // create it!
    async function fetchAll() { // 304182775769989644 {}
      const res = await api.read("304182775769989644");
      console.log( await res);
    }
    fetchAll();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
