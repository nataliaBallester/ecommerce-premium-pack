import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext= ()=> useContext(CartContext)

function CartContextProvider({children})
{
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState()

    console.log("quantity cartcontext")
    console.log(quantity)

    useEffect(()=> {
        let tot = 0

        const totals = cartList.map (p => p.precio * p.quantity)
        //totales
        totals.map(p => tot = tot + p)
        setTotal(tot)

        const cartCantidad = cartList.length
        setQuantity(cartCantidad) 
    },[cartList]
    )

    // Función para ver si el producto está en el carrito
    function isInCart(id){
        const item = cartList.find(p => p.id === id)
        //const item = cartList.findIndex(prod => prod.id === id);
        if (item === undefined){
            return false
        }
        else {

            return true
        }
    }

    const totalPrice=()=>{
        return cartList.reduce((acum, item)=> acum + (item.quantity * item.price), 0)
    }

    const totalQuanItems=()=>{
        return cartList.reduce((acum, item)=> acum += item.quantity,0)
    }

    const addToCart = (item)=>{

        if (isInCart(item.id)){
            const idx = cartList.findIndex(prod => item.id === prod.id);
            const newCartList = cartList

            const newQuantity = cartList[idx].quantity + item.quantity
            newCartList[idx].quantity = newQuantity

            setCartList( [...newCartList] )
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

    const deleteItem= (id)=>{
        //uso filter para que traiga todos los productos <> al id que le paso
        setCartList( cartList.filter(prod => prod.id !== id))
    }

    return(
        <CartContext.Provider value={{
            cartList,
            quantity,
            addToCart,
            removeCart,
            totalPrice,
            deleteItem,
            totalQuanItems
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider 

