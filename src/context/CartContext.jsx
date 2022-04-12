import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext= ()=> useContext(CartContext)

function CartContextProvider({children})
{
    const [cartList, setCartList] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState()

    useEffect(()=> {
        let tot = 0

        const totales = cartList.map (p => p.precio * p.cantidad)
        totales.map(p => tot = tot + p)
        setTotal(tot)

        const cartCantidad = cartList.length
        setCantidad(cartCantidad) 
    },[cartList]
    )

    // Función para ver si el producto está en el carrito
    function isInCart(id){
        const item = cartList.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    const addToCart = (item)=>{

        if (isInCart(item.id)){
            const productAnt = cartList.find(p => p.id === item.id)
            //console.log (item.cantidad)
            const addcant = productAnt.cantidad + item.cantidad
            
            console.log (productAnt.cantidad)
            alert(addcant)

        }
        else
        {
            setCartList([
                ...cartList, 
                item])
        }
    }

    const removeCart=()=>{
        //quiero que el carrito vuelva a 0, le paso un array vacio
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            cantidad,
            addToCart,
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider 