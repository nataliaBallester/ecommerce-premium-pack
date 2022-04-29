import { useCartContext } from "../../context/CartContext"
import { addDoc,collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useState } from "react"
import Form from 'react-bootstrap/Form'

function Cart()
{
    const [formData, setFormData] = useState(
        {
            name: '',
            phone: '',
            email: '',

        }
    )
    const {cartList, removeCart, totalPrice, quantity,deleteItem} = useCartContext()

    const createOrder = async (e)=>{
        e.preventDefault()

        //nuevo objeto para la orden
        let order={}

        order.buyer = {name: 'natalia', phone:'1164089877', email: 'npballester@gmail.com'}
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
        //.then (resp => console.log(resp))
        .then(({id})=> console.log(id))
        .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
        .finally(removeCart())

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
//        .catch((err)=> console.log(err)) //Catch captura todos los errores, los de la promesa y los de la aplicacion
        .finally(()=> console.log('actualizado'))

        batch.commit()

    }

    const handleChange=(event)=>{
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    return(
        <div>

            {quantity > 0 ? (
            <>
                {cartList.map(prod => 
                    <div>
                        <li key={prod.id}> nombre: {prod.name} - cantidad: {prod.quantity} - precio: {prod.price} </li>
                        <button className="btn btn-outline-danger" onClick={()=>deleteItem(prod.id)}>
                        <img src='..\img\tacho.jpg' width="50" height="30" className="d-inline-block align-top" />
                        </button>
                    </div>)}
                <br/>
                {totalPrice() !== 0 && <label>El precio total es: ${totalPrice() } </label>}
                <br/>
                <button className="btn btn-outline-warning" onClick={removeCart}>Vaciar</button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                </Form>
                <form onSubmit={createOrder}>
                    <input name='name' type='text' placeholder="Ingrese su nombre" 
                        onChange={handleChange} 
                        value={formData.name}
                    />
                    <input name='phone' type='text' placeholder="Ingrese su telefono" 
                        onChange={handleChange} 
                        value={formData.phone}
                    />
                    <input name='email' type='text' placeholder="Ingrese su email" 
                        onChange={handleChange} 
                        value={formData.email}
                    />
                </form>
                {/*<button className="btn btn-outline-warning" onClick={createOrder}>Generar Orden</button>*/}
            </>
            ) :
            (
            <>
                <Link to='/'>
                    <button className="btn btn-outline-warning" onClick={()=>console.log('ir al home') }>
                        No hay productos en el carrito.
                    </button>
                </Link>
            </>
            )
            }
        </div>
    )

}

export default Cart
