import React from 'react'
import NavBar from '../components//NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemCount from '../components/ItemCount/ItemCount'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

/*
const style = {backgroundColor: 'blue'}
const handleConsole = () =>{
  console.log ('soy evento')
}

let titulo = 'Productos'
let subTit = 'soy subtitulo de app'
*/
function RoutesApp(){
  return(
    < >
      <NavBar/>
      <ItemDetailContainer/>
      <ItemCount/>

      
    </>
  )
    
}

export default RoutesApp