import { Link } from "react-router-dom";


function Item({product}){

  return (
    <div className='col-md-4 p-1'>
        <div className="card w-75 mt-5">
            <div className="card-header">
                {`${product.category} - ${product.name}` }
            </div>
            <div className="card-body">
                <img src={product.image} alt='' className="w-50"/>
                <br/>
                ${`${product.price}`}
            </div>
            <div className="card-footer">
              <Link to={`/detail/${product.id}`}>
                <button className="btn btn-outline-secondary btn-block">Detalle del producto</button>
              </Link>
            </div>        
        </div>    
    </div>

  );
};

export default Item;
