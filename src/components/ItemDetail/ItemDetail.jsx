
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

//function ItemDetail({categoria, nombre, precio,  foto}){
function ItemDetail({product})
{
    const {addToCart, cartList} = useCartContext()

    function onAdd(qnt){
        //console.log (cant)
//        addToCart({...product, quantity: qnt})
        addToCart({item:{...product}, quantity: qnt})

    }

    return (
        <>
          <div className="card w-50 mt-5">
              <div className="card-header">
                  {`${product.id} - ${product.category} - ${product.name}` }
              </div>
              <div className="card-body">
                  <img src={product.image} alt='' className="w-50"/>
                  <br/>
                  ${`${product.price}`}
              </div>
              <div className="card-footer">
                  <ItemCount key={product.id} inicia={1} stock={product.stocck} onAdd={onAdd} />
              </div>   
          </div>    
          </>
    );
  
}
  export default ItemDetail;
  

  