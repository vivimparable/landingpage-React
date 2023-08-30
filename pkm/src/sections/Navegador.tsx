
 import {Contexto} from '../context/context'
 import {useContext} from 'react'
 import { Link ,useNavigate, NavLink} from "react-router-dom";


function Navegador() {
  const {handleMouseOver,animationTime, animationHandle} = useContext(Contexto)
  const NavigateTo = useNavigate();
  return (
    <>
        <nav>
          <div className='logo'>
          <h1 onClick={()=> NavigateTo('/')} className={`${animationTime ? 'animating' : ''}`}  onAnimationEnd={handleMouseOver}  onMouseOver={animationHandle} >X</h1>
          </div>
            <ul>
                <li><NavLink className={({isActive})=>  isActive?'activo':''} to='/About'>About Me</NavLink></li>
                <div className='left-line'> </div>
                <li><NavLink className={({isActive})=>  isActive?'activo':''} to='/Projects'>Projects</NavLink></li>
                <li><NavLink className={({isActive})=>  isActive?'activo':''} to='/ContactMe'>Contact Me</NavLink></li>

            </ul>
        </nav>
    </>
  )
}

export default Navegador
