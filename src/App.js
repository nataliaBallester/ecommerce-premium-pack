import useState from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [count, setCount]= useState(0)
  const style = {backgroundColor: 'blue'}
  const handleConsole = () =>{
    console.log ('soy evento')
  }

  return (
    <div className="App" style={style} onClick={handleConsole}>
        
        <NavBar/>
        <Titulo/>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
