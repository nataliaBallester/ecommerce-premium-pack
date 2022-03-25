import React from 'react';
import { useState } from 'react';

const ItemCount = () => {
    //Inicializa el contador 1
    const inicia = 1; 
    const stop = 7; 

  //hook de estado
  const [cant, setCant] = useState(inicia);

  const onAdd = (cant) => {
    alert(`Hiciste ${cant} Click/s`);
  };

  const haceClick = (num) => {
    setCant(cant + num);
  };

  return (
    <div className="count-container">
        <button className="count-container__button" onClick={() => haceClick(-1)} 
            disabled={cant === inicia ? true : null}> -
        </button>
        <span className="count-container__qty">  {cant}  </span>
        <button className="count-container__button" onClick={() => haceClick(+1)}
          disabled={cant === stop ? true : null} > +
        </button>  
        <span>
            <button className="button-primary" onClick={() => onAdd(cant)} disabled={stop === 0 ? true : null}>
                Agregar
            </button>
        </span>
    </div>
  );
};

export default ItemCount;