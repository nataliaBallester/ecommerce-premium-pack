
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

//function ItemDetail({categoria, nombre, precio,  foto}){
function ItemDetail({producto})
{
    const {addToCart, cartList} = useCartContext()

    function onAdd(cant){
        //console.log (cant)
        addToCart({...producto, cantidad: cant})
//        addToCart({item:{...producto}, quantity: cant})


    }

    return (
        <>
          <div className="card w-50 mt-5">
              <div className="card-header">
                  {`${producto.id} - ${producto.categoria} - ${producto.nombre}` }
              </div>
              <div className="card-body">
                  <img src={producto.foto} alt='' className="w-50"/>
                  <br/>
                  ${`${producto.precio}`}
              </div>
              <div className="card-footer">
                  <ItemCount key={producto.id} inicia={1} stock={producto.stock} onAdd={onAdd} />
              </div>   
          </div>    
          </>
    );
  
}
  export default ItemDetail;
  

  