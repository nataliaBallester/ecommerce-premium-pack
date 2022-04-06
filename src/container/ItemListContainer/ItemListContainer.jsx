import React from "react"
import {useEffect, useState} from 'react'
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"

function ItemListContainer({greeting}){
    const [productos, setProductos]= useState([])
    const [loading, setLoading]= useState(true)

    const {categoriaId}= useParams()

    useEffect(()=>{
        if(categoriaId){
          console.log ('existe')
  
          //setTimeout(()=> {
          getFetch //funcion que simula el llamado a una api
          .then(resp=> setProductos(resp.filter(item => item.categoria=== categoriaId ) )) 
          .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
          
          .finally(()=> setLoading(false)) //se ejecuta siempre y al ultimo despues de ejecutar todos los then
          //},3000)
    
        }
        else{ 
          //console.log ('undefine')
          getFetch //funcion que simula el llamado a una api
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
                <div className="container">Cargando productos eccomers...</div> 
            : productos.map((producto)=>{
                return (
                    <>
                        <ItemList key={producto.id} data={producto}/>
                    </>
                );
                })//fin map
        }
        </>
    )

}

export default ItemListContainer
    
    