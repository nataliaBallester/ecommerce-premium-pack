import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const InputCount= ()=> {

  return (
      <>
      <Link to='/cart' >
          <button 
              className="btn btn-outline-primary" 
              onClick={()=>console.log('ir a cart') } 
          >Ir al Cart o Terminar compra</button>
      </Link>  
      
      <Link to='/'>
          <button 
              className="btn btn-outline-primary" 
              onClick={()=>console.log('ir al home') } 
          >Seguir comprando</button>
      </Link>
      </>
  )
}

const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
            >Agregar Al carrito</button>

}

const ItemCount = ({inicia, stock}) => {
    //Inicializa el contador 1
    //const inicia = 1; 
    //const stop = 7; 
    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
}
  //hook de estado
  const [cant, setCant] = useState(inicia);

  const onAdd = (cant) => {
    alert(`Hiciste ${cant} Click/s`);
  };

  const haceClick = (num) => {
    setCant(cant + num);
  };

  return (
    <div className="count-container mt-2">
        <button className="count-container__button" onClick={() => haceClick(-1)} 
            disabled={cant === inicia ? true : null}> -
        </button>
        <span className="count-container__qty">  {cant}  </span>
        <button className="count-container__button" onClick={() => haceClick(+1)}
          disabled={cant === stock ? true : null} > +
        </button>  
        <span>
            <button className="button-primary" onClick={() => onAdd(cant)} disabled={stock === 0 ? true : null}>
                Agregar
            </button>
        </span>
    </div>
  );
};

export default ItemCount;