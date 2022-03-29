import {useEffect, useState} from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import {  getFetchOne } from '../../helpers/getFetch'

function ItemDetailContainer() {
    const [producto, setProducto] = useState( {} )
    const [loading, setLoading]= useState(true)

    
  useEffect(()=> {
    getFetchOne // funcion que simula una api    
    .then(resp => setProducto(resp) )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [])

return(
    <div className="col-md-4">
    { 
        loading ?  
            <p>Cargando productos...</p>
        :
            producto.map((prod)=>{
              return (
                <div key={prod.id}>
                  <ItemDetail
                    categoria={prod.categoria}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    foto={prod.foto}
                  />
                </div>
              );
            })//fin map
    }
    
    </div>   
  )
}

export default ItemDetailContainer
