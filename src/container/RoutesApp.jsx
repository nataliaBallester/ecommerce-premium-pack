import React from 'react'
import NavBar from '../components//NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemCount from '../components/ItemCount/ItemCount'

/*
const style = {backgroundColor: 'blue'}
const handleConsole = () =>{
  console.log ('soy evento')
}*/

let titulo = 'Productos'
let subTit = 'soy subtitulo de app'

function RoutesApp(){
  return(
    < >
      <NavBar/>
      <ItemListContainer greeting='Hola soy ItemListContainer'>
        {/*Titulo es children de ItemListContainer*/}
        <Titulo titulo={titulo} subTit={subTit}/>
      </ItemListContainer>
      <ItemCount/>

      
    </>
  )
    
}

export default RoutesApp