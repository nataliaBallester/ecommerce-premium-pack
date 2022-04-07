import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext= ()=> useContext(CartContext)

function CartContextProvider({children})
{
    const [cartList, setCartList] = useState([])

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
            addToCart,
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider 