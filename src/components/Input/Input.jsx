import Titulo from "../Titulo/Titulo"

function Input({placeholder, saludo}){
    return(
        <>
        <Titulo titulo={'titulo input'} subTit={'subTit input'}></Titulo>
        <input placeholder={placeholder}></input> <br/>
        <button onClick={saludo}>Saludo</button>
      </>
    )
}

export default Input

