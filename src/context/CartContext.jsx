import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

export const useCartContext= ()=> useContext(CartContext)

function CartContextProvider({children})
{
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState()

    useEffect(()=> {
        let tot = 0

        const totales = cartList.map (p => p.precio * p.quantity)
        totales.map(p => tot = tot + p)
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

    const precioTotal=()=>{
        return cartList.reduce((acum, item)=> acum + (item.quantity * item.price), 0)
    }

    const cantTotalItems=()=>{
        return cartList.reduce((acum, item)=> acum += item.quantity,0)
    }

    const addToCart = (item)=>{
        console.log ("addToCart")
        console.log(item)

        if (isInCart(item.id)){
            const productAnt = cartList.find(p => p.id === item.id)
            //console.log (item.cantidad)
            const addcant = productAnt.quantity + item.quantity
            
            console.log (productAnt.quantity)
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

    const deleteItem= (id)=>{
        setCartList( cartList.filter(prod => prod.id !== id))
    }

    return(
        <CartContext.Provider value={{
            cartList,
            quantity,
            addToCart,
            removeCart,
            precioTotal,
            deleteItem,
            cantTotalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider 

/*
  const addToCart = (item) => {
        const idx = cartList.findIndex(prod => item.id === prod.id);   // 0 -> 
        console.log(idx)
        console.log(item)
        if (idx !== -1 ) {
            // la lógica
            const newArray = cartList
            const newCant = cartList[idx].cantidad + item.cantidad
            newArray[idx].cantidad = newCant
            setCartList( [...newArray] )
        } else {
            setCartList([
                ...cartList,
                item
            ])            
        }

    }

  */