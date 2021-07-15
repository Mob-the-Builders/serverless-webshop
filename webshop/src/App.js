import logo from './logo.svg';
import './App.css';

function App() {
  
  function createProduct(data) {
    return fetch('/.netlify/functions/products-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
  // Product data
  const myProduct = {
    id: 1,
    name: 'A product name',
    description: 'A product description',
    price: 1.00
  }
  
  // create it!
  createProduct(myProduct).then((response) => {
    console.log('API response', response)
    // set app state
  }).catch((error) => {
    console.log('API error', error)
  })
  
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
