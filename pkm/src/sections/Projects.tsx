 import getDataHooks from '../hooks/getDataHooks'
import BuscadorTecnologia from '../components/BuscadorTecnologia';
import {useState,useEffect} from 'react'

function Projects() {

  const [tecnologia,setTecnologia]= useState('')
  const [clonedData, setClonedData] = useState(getDataHooks);

  useEffect(() => {
    if(tecnologia === 'vue'){
      const dataFiltered = getDataHooks.filter(a=> a.type ==='vue');
      setClonedData(dataFiltered)
    }else if(tecnologia === 'react'){
      const dataFiltered = getDataHooks.filter(a=> a.type ==='react');
      setClonedData(dataFiltered)
    }else{
      setClonedData(getDataHooks)
    }
  }, [tecnologia])
  
  return (
<>
<BuscadorTecnologia tecnologia={tecnologia} setTecnologia={setTecnologia}/>
    <div className="cardMain">
        {
          clonedData.map((a,index)=>{
            return<div key={index} className='cardMain-class' >
              <div className='title-content'>
              <h3>{a.title}</h3>
              <p className='parrafo'>{a.type}</p>
              </div>
              {a.link?
              <a target='_blank' href={a.link}>Ver projecto</a>
              : <p>No link</p>
              }
              {
                a.completed !== 'soon' ?
                <p className='terminado'>Terminado</p> : <p className='noTerminado'>En progresso</p>
              }
            </div>
          })
        }

    </div>
    </>
  )
}

export default Projects;
