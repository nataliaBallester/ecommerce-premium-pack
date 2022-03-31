
//function ItemDetail({categoria, nombre, precio,  foto}){
    function ItemDetail({producto})
{

    return (
          <div className="card w-100 mt-5">
              <div className="card-header">
                  {`${producto.id} - ${producto.categoria} - ${producto.nombre}` }
              </div>
              <div className="card-body">
                  <img src={producto.foto} alt='' className="w-50"/>
                  <br/>
                  ${`${producto.precio}`}
              </div>
          </div>    
  
    );
  
}
  export default ItemDetail;
  