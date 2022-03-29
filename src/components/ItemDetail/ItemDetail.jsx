
function ItemDetail({categoria, nombre, precio,  foto}){


    return (
          <div className="card w-100 mt-5">
              <div className="card-header">
                  {`${categoria} - ${nombre}` }
              </div>
              <div className="card-body">
                  <img src={foto} alt='' className="w-50"/>
                  <br/>
                  ${`${precio}`}
              </div>
          </div>    
  
    );
  };
  
  export default ItemDetail;
  