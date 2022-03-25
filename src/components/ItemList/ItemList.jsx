import React, { useEffect, useState } from "react"
import Item from "../Item/Item"
import { getFetch } from "../../helpers/getFetch"

function ItemList(){
    const [productos, setProductos]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
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
      .then(resp=> setProductos(resp )) 
      .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
      
      .finally(()=> setLoading(false)) //se ejecuta siempre y al ultimo despues de ejecutar todos los then
      //},3000)
    },[])

    return(
      <div className="col-md-4">
      { 
          loading ?  
              <p>Cargando productos...</p>
          :
              productos.map((producto)=>{
                return (
                  <div key={producto.id}>
                    <Item
                      categoria={producto.categoria}
                      nombre={producto.nombre}
                      precio={producto.precio}
                      id= {producto.id}
                      stock={producto.stock}
                      foto={producto.foto}
                    />
                  </div>
                );
              })//fin map
      }
      
      </div>   
    )     
}

export default ItemList
