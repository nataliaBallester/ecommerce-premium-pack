import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import NavBar from '../components//NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'


function RoutesApp(){
    const obj = {tit: 'Soy titulo de app', subTit: 'soy subtit app'}
  return(
        <BrowserRouter>
            <NavBar/>
            <Routes> 
                <Route path='/' element={<ItemListContainer greeting='Hola soy ItemListContainer Ecommerce' titulo= {Titulo}/>}/>
            </Routes>
            <Routes> 
                <Route path='/detail/:detalleId' element={<ItemDetailContainer/>}/>
            </Routes>
            <Routes> 
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Hola soy ItemListContainer' titulo= {Titulo}/>}/>
             </Routes>
            <Routes> 
                <Route path='/cart' element={<Cart />} />
            </Routes>

      </BrowserRouter>
  )
    
}

export default RoutesApp