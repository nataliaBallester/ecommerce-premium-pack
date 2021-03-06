import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({inicia, stock, onAdd}) => {
    //Inicializa el contador 1
    //const inicia = 1; 
    //const stop = 7; 
    const [open, setOpen ] = useState(false)

    //hook de estado
    const [cant, setCant] = useState(inicia);

    const haceClick = (num) => {
      setCant(cant + num);
    };
    
    //function addAndOpen(item, counter, id)
    function agregar(cant)
    {
      //agrega al carrito
      onAdd( cant)
      setOpen(true)
    }

    return(
      <div className="count-container mt-2">
      { !open ? (
        <span>
            <button className="count-container__button" onClick={() => haceClick(-1)} 
              disabled={cant === inicia ? true : null}> -
            </button>{' '}
            <span className="count-container__qty">  {cant}  </span>
            <button className="count-container__button" onClick={() => haceClick(+1)}
              disabled={cant === stock ? true : null} > + 
            </button>{' '}
            <span className="count-container__qty"> {stock} </span> 
            <button className="button-primary" onClick={() => agregar(cant)} disabled={stock === 0 ? true : null}>
                Agregar
            </button>
        </span>
        ) : 
        (
          <>
            <Link to='/cart' >
                <button className="button-primary"> 
                  Terminar compra
                </button>
            </Link>{' '}   
            <Link to='/'>
                <button className="button-primary"> 
                  Seguir comprando
                </button>
            </Link>
          </>
        )
      }
    </div>

    )
}

export default ItemCount;