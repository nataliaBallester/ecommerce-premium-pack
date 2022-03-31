import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import { getFetch } from "../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"

function ItemList(){
    const [productos, setProductos]= useState([])
    const [loading, setLoading]= useState(true)

    const {categoriaId}= useParams()

    console.log(categoriaId)
    
    useEffect(()=>{
      if(categoriaId){
        console.log ('existe')

        //setTimeout(()=> {
        getFetch //funcion que simula el llamado a una api
        //.then(resp=>{
          //throw new Error ('Esto es un error') //Instancia un error
          //En cada then se hace una sola tarea
        //    console.log(resp)
        //    return resp // luego pasa al siguiente then
        //} 
        //,(err)=> console.log(err)
        //)
        .then(resp=> setProductos(resp.filter(item => item.categoria=== categoriaId ) )) 
        .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
        
        .finally(()=> setLoading(false)) //se ejecuta siempre y al ultimo despues de ejecutar todos los then
        //},3000)
  
      }
      else{ 
        console.log ('undefine')
        getFetch //funcion que simula el llamado a una api
        //.then(resp=>{
          //throw new Error ('Esto es un error') //Instancia un error
          //En cada then se hace una sola tarea
        //    console.log(resp)
        //    return resp // luego pasa al siguiente then
        //} 
        //,(err)=> console.log(err)
        //)
        .then(resp=> setProductos(resp)) 
        .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
        
        .finally(()=> setLoading(false)) //se ejecuta siempre y al ultimo despues de ejecutar todos los then
        //},3000)

      }
      
    },[categoriaId])


    return(
      <>
      { 
          loading ?  
              <p>Cargando productos...</p>
          :
              productos.map((producto)=>{
                return (
                  <>
                    <Item key={producto.id} producto={producto}/>
                    <ItemCount/>
                  </>
                );
              })//fin map
      }
      
      </>   
    )     
}

export default ItemList
