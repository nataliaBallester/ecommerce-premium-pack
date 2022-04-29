import { useCartContext } from "../../context/CartContext"

function CartWidget(){

    /*const destructuring de useContext que esta en la funcion useCartContext ==> esto me da una 
        sola importacion
    */
    const {totalQuanItems}= useCartContext()

    return(
        <>
            <img src='..\img\carrito.png' width="50" height="30" className="d-inline-block align-top" />
            {totalQuanItems() !== 0 && <label> {totalQuanItems()} </label>}
        </>
    )
}

export default CartWidget