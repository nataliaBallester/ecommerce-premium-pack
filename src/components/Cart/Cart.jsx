import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartForm from "../CartForm/CartForm"

function Cart()
{
   
    const {cartList, removeCart, totalPrice, quantity,deleteItem} = useCartContext()

    return(
        <div>

            {quantity > 0 ? (
            <>
                {cartList.map(prod => 
                   
                    <li key={prod.id}> nombre: {prod.name} - cantidad: {prod.quantity} - precio: ${prod.price} { } 
                        <button onClick={()=>deleteItem(prod.id)}>
                            <img src='..\img\tacho.jpg' width="20" height="20" className="d-inline-block align-top" />
                        </button>
                    </li>
                )}
                <br/>
                {totalPrice() !== 0 && <label>El precio total es: ${totalPrice() } </label>}
                <br/>
                <div>
                    <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar</button>
                </div>
                <br/>
                <div>
                    <CartForm/>
                </div>
                
            </>
            ) :
            (
            <>
                <Link to='/'>
                    <button className="btn btn-outline-warning">
                        No hay productos en el carrito.
                        Volver a comprar
                    </button>
                </Link>
            </>
            )
            }
        </div>
    )

}

export default Cart
