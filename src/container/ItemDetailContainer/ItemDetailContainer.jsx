import React from "react"
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import {doc,getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
//import {  getFetch, getFetchOne } from '../../helpers/getFetch'
//import ItemCount from '../../components/ItemCount/ItemCount'



function ItemDetailContainer() {
    const [product, setProduct] = useState( {} )
    
    const [loading, setLoading]= useState(true)

    const {detalleId} = useParams()

    useEffect(()=>{
      const querydb = getFirestore()
      const queryProd = doc(querydb, 'products', detalleId)
    
      getDoc (queryProd)
      .then((resp)=> setProduct({id:resp.id, ...resp.data()}))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [])
    
 
return(
    <>
    { 
      loading ?  
            <p>Cargando producto...</p>
          :
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <ItemDetail key={product.id} product = {product}/>
            </div>
    }
    </>
)

}

export default ItemDetailContainer
