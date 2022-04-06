import Item from "../Item/Item"

const ItemList = ({data}) => {
  return(
    <>
      <Item key={data.id} producto={data}/>
    </>
  )

}

export default ItemList
