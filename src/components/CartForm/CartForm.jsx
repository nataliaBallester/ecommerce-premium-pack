import { useEffect, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc,collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"


function CartForm(){

    const {cartList, removeCart, totalPrice} = useCartContext()

    const [formData, setFormData] = useState(
        {
            name: '',
            phone: '',
            email: '',
            emailr: '',

        }
    )

    const [disable, setDisabled] = useState(true)
    const [nameError, setNameError] = useState('')

    const [idOrder, setIdOrder] =  useState(0)
    const [loading, setLoading]= useState(true)

     
    // validacion y deshabilita botton generar orden
    useEffect(() => {

        //habilita o deshabilita el boton segun validacion del formulario
        setDisabled(formValidation())
    
    }, [formData,setFormData]) //[formData, setFormData]) 

  
    // here we run any validation, returning true/false
  const formValidation = () => {
    if (formData.name === "") {
      setNameError('Nombre no puede estar vacio.!')
      return true
    } 
    else if (formData.phone === ""){
        setNameError('Telefono no puede estar vacio.!')
        return true
    }
    else if(formData.email === ""){
        setNameError('Email no puede estar vacio.!')
        return true 
    }
    else if (formData.emailr != formData.email){
        setNameError('Las direcciones de email deben ser iguales')
        return true
    }
    else{
        setNameError(null)
        return false
    }
    
  }

    const handleChange=(event)=>{
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    const createOrder = async (e)=>{
        e.preventDefault()

        //nuevo objeto para la orden
        //agregar validaciones para form data

        let order={}

        order.buyer = formData //{name: 'natalia', phone:'1164089877', email: 'npballester@gmail.com'}
        order.total = totalPrice()

        //transformo mi cartList para mostrar solo los 3 campos que solicitan
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.name
            const price = cartItem.price * cartItem.quantity

            return {id, title, price}

        })

        //create order en la BD firestored
        const querydb = getFirestore()
        const queryCollection = collection(querydb,'orders')

        await addDoc(queryCollection, order)
        
        //.then(({id})=>console.log(id))
        .then((resp)=> setIdOrder(resp.id))
        .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
        //.finally(removeCart())
        //.finally(() => setLoading(false))
        .finally()

        //update de un documento de una colleccion
        /*
        const queryUpdate =  doc(querydb, 'products', '57fYCSfYSWOUIUzzo7Uh')
        updateDoc(queryUpdate, {stock: 45})
        .then (resp => (console.log ("actualizado")))
        */

        //Actualizar el stock
        const queryCollecProducts = collection(querydb,'products')
        const queryUpdateStock = query(queryCollecProducts,
                                        //documentId funcion que trae todos los documentsId que esten en
                                        where (documentId(), 'in', cartList.map(it=> it.id)))

        //usamos writeBatch para actualizar un lote de documentos
        const batch = writeBatch(querydb)

        await getDocs(queryUpdateStock)
        .then (resp => resp.docs.forEach(res => batch.update(res.ref,{
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
        })))
        .catch((err)=> console.log(err)) 
        .finally(() => setLoading(false))
        
        batch.commit()

    }

    const deleteCart = async (e)=>{
        e.preventDefault()

        removeCart()
    }

    return(
        <>
        { 
          loading ?
            <form onSubmit={createOrder} autoComplete="off">
                <input name='name' type='text' placeholder="Ingrese su nombre" 
                    onChange={handleChange} 
                    value={formData.name}
                /><p></p>   
                <input name='phone' type='text' placeholder="Ingrese su telefono" 
                    onChange={handleChange} 
                    value={formData.phone}
                /><p></p>   
                <input name='email' type='email' placeholder="Ingrese su email" 
                    onChange={handleChange} 
                    value={formData.email}
                /><p></p>   
                <input name='emailr' type='email' placeholder="Repetir email" 
                    onChange={handleChange} 
                    value={formData.emailr}
                />
                { nameError && <p>{nameError}</p> }
                <br/><br/>
                <button className="btn btn-outline-warning" disabled={disable}>Generar Orden</button>
            </form>
            :
                <>
                <p>Tú número de orden es: {idOrder}</p> 
                <button className="btn btn-outline-warning" onClick={deleteCart}> OK </button>
                </>
        }
        </>
    )
}

export default CartForm;

