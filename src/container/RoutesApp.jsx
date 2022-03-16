import React from 'react'
import NavBar from '../components//NavBar/NavBar'
import Titulo from '../components/Titulo/Titulo'
//import Input from '../components/Input/Input'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
//import useState from 'react';


//https://drive.google.com/file/d/1kstZEvbT8PUScpGb0YgKzqT4jdTF0StF/view?usp=sharing


//const [count, setCount]= useState(0)
const style = {backgroundColor: 'blue'}
const handleConsole = () =>{
  console.log ('soy evento')
}

let titulo = 'Soy Titulo de app'
let subTit = 'soy subtitulo de app'

const fnSaludo = ()=>{
  console.log ('saludando ')
}

function RoutesApp(){
  return(
    < >
      <NavBar/>
      <ItemListContainer greeting='Hola soy ItemListContainer'>
        <Titulo titulo={titulo} subTit={subTit}/>
      </ItemListContainer>

      
    </>
  )
    
}

export default RoutesApp