import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BusinessList />
      </header>
      
    </div>
  );
}

export default App;
