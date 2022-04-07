import { useCartContext } from "../../context/CartContext"

function CartWidget(){

    /*const destructuring de useContext que esta en la funcion useCartContext ==> esto me da una 
        sola importacion
    */
    const {cartList, removeCart} = useCartContext()


    return(
        <div>
            <img src='..\img\carrito.png' width="50" height="30" className="d-inline-block align-top" />
            {cartList.map(prod => <li key={prod.id}> nombre: {prod.nombre} - cantidad: {prod.cantidad} </li>)}
            <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar</button>
        </div>
    )
}

export default CartWidget