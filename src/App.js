import { createContext } from "react";
import RoutesApp from "./routes/RoutesApp";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'

const contextApp = createContext('naty')

function App() {

  console.log (contextApp)
  return (
    <div className="App">
      <RoutesApp/>
    </div>
  );
}

export default App;
