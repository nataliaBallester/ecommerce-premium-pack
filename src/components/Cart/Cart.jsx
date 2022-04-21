import { useCartContext } from "../../context/CartContext"

function Cart()
{
    const {cartList, removeCart, precioTotal, quantity} = useCartContext()

    console.log (cartList)

    return(
        <div>
            {quantity > 0 && 
            <>
                {cartList.map(prod => <li key={prod.id}> nombre: {prod.name} - cantidad: {prod.quantity} - precio: {prod.price} </li>)}
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
