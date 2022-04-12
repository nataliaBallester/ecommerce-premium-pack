import { useCartContext } from "../../context/CartContext"

function CartWidget(){

    /*const destructuring de useContext que esta en la funcion useCartContext ==> esto me da una 
        sola importacion
    */
    const {cantTotalItems}= useCartContext()

    return(
        <>
            <img src='..\img\carrito.png' width="50" height="30" className="d-inline-block align-top" />
            {cantTotalItems() !== 0 && <label> {cantTotalItems() } </label>}
        </>
    )
}

export default CartWidget