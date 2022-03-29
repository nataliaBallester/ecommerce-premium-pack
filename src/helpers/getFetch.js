import { productos, producto } from "../data/data"

export const getFetch = new Promise((resolve, reject)=>{
    //Acciones
    let condition = true
    if (condition){
        setTimeout(()=>{resolve(productos)},3000)
    }
    else{
        reject('400 not found')
    }
})

export const getFetchOne = new Promise(( resolve, reject )=>{
    
    let condition=true
    if (condition) {
        setTimeout(()=>{ 
            resolve(producto)
         }, 3000)
    } else {
        reject('400 not found')
        
    }
})

