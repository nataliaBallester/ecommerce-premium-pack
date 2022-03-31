import React from "react"
import ItemList from "../../components/ItemList/ItemList"

function ItemListContainer({greeting,children}){
   //console.log(children)
    //hook 
    

    return(
        <div>
            {greeting}
            {children}
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ItemList/>
            </div>
        </div>
    )

}

export default ItemListContainer
    