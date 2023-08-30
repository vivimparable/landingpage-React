interface props{
tecnologia : string,
setTecnologia:React.Dispatch<React.SetStateAction<string>>
}

function BuscadorTecnologia({tecnologia,setTecnologia}: props) {
  return (
    <nav className="projects-nav">
        <button onClick={()=>setTecnologia('react')}>React</button>
        <button onClick={()=>setTecnologia('vue')}>Vue</button>
        <button onClick={()=>setTecnologia('')} >Todos</button>
    </nav>
  )
}

export default BuscadorTecnologia
