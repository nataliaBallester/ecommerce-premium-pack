import './Titulo.css'

function Titulo({titulo},{subTit}){
    return(
        <div className='Titulo'>Titulo de Titulo
            <h2>{titulo}</h2>
            <h2>{subTit}</h2>
        </div>
    )
}

export default Titulo