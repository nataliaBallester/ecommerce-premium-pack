import Item from "../Item/Item"

const ItemList = ({data}) => {

  return(
    <>
      <Item key={data.id} product={data}/>
    </>
  )

}

export default ItemList
