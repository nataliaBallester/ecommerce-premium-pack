import { useCartContext } from "../../context/CartContext"

function Cart()
{
    const {cartList, removeCart, precioTotal} = useCartContext()
    const {cantidad}= useCartContext()
    
    return(
        <div>
            {cantidad > 0 && 
            <>
                {cartList.map(prod => <li key={prod.id}> nombre: {prod.nombre} - cantidad: {prod.cantidad} - precio: {prod.precio} </li>)}
                <br/>
                {precioTotal() !== 0 && <label>El precio total es: ${precioTotal() } </label>}
                <br/>
                <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar</button>
            </>
            }
        </div>
    )

}

export default Cart
