import React from "react"
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import {collection, getDocs, getFirestore,query, where} from 'firebase/firestore'
import ItemList from "../../components/ItemList/ItemList"

//import { getFetch } from "../../helpers/getFetch"


function ItemListContainer({greeting}){
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)

    const {categoryId}= useParams()

    //traemos todos los productos de firestore
    useEffect(()=>{
      const querydb = getFirestore()
      const queryCollection = collection(querydb,'products')
      const queryFilter = categoryId ?
                              query(queryCollection, where('category', '==', categoryId))
                            : 
                              queryCollection

      getDocs(queryFilter)
      .then(resp=> setProducts(resp.docs.map(item => ({id: item.id, ...item.data()}))))
      .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
      .finally(()=> setLoading(false)) //se ejecuta siempre y al ultimo despues de ejecutar todos los then

    }, [categoryId])

    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {
            loading ? 
                <div className="container">Cargando productos eccomers...</div> 
            : products.map((prod)=>{
                return (
                    <ItemList key={prod.id} data={prod}/>
                );
                })//fin map
        }
        </div>
    )

}

export default ItemListContainer
    
    