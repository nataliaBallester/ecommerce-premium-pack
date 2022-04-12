import { useCartContext } from "../../context/cartContext";

function Cart()
{
    const{cartList, removeCart}= useCartContext()
    return(
        <div>
            {cartList.map(prod => <li key={prod.id}> nombre: {prod.name} - cantidad: {prod.cantidad} </li> )}
            <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar Carrito</button>
        </div>
    )

}

export default Cart