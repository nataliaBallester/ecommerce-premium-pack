
function Item({categoria, nombre, precio, id, stock, foto}){


  return (
    <div key={id} className='col-md-4'>
        <div className="card w-100 mt-5">
            <div className="card-header">
                {`${categoria} - ${nombre}` }
            </div>
            <div className="card-body">
                <img src={foto} alt='' className="w-50"/>
                <br/>
                ${`${precio}`}
            </div>
            <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">Detalle del producto</button>
            </div>        
        </div>    
    </div>

  );
};

export default Item;
