import RoutesApp from "./routes/RoutesApp";
import CartContextProvider from "./context/CartContext";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'


function App() {
  
  return (
      <CartContextProvider>
        <div className="App">
          <RoutesApp/>
        </div>
      </CartContextProvider>
  );
}

export default App;
