import './Titulo.css'

function Titulo({titulo},{subTit}){
    return(
        <div className='Titulo'>Titulo de Titulo
            <h1>{titulo}</h1>
            <h2>{subTit}</h2>
        </div>
    )
}

export default Titulo