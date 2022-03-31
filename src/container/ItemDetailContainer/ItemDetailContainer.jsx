import React from "react"
import {useEffect, useState} from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import {  getFetch, getFetchOne } from '../../helpers/getFetch'
import ItemCount from '../../components/ItemCount/ItemCount'
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [producto, setProducto] = useState( {} )
    const [loading, setLoading]= useState(true)

    const {detalleId} = useParams()
    
  useEffect(()=> {
       
    getFetch
    .then(resp => setProducto(resp.find(prod => prod.id=== detalleId)) )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [])

return(
    <>
    
      <ItemDetail key={producto.id} producto = {producto}/>
      <ItemCount/>
    </>
)

}

export default ItemDetailContainer
