import React from "react"
import ItemList from "../ItemList/ItemList"

function ItemListContainer({greeting,children}){
   //console.log(children)

    return(
        <div>
            {greeting}
            {children}
            <ItemList />
        </div>
    )

}

export default ItemListContainer
    