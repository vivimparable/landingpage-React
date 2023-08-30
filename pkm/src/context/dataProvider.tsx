import {Contexto} from './context'
import {  useState } from 'react';


const AuthProvider = function({children}:{children:any}){

    const [animationTime,setAnimationTime] = useState(false);
    const animationHandle=()=>{
        setAnimationTime(true)
       }
  const handleMouseOver = () => {
    if (animationTime) {
        setAnimationTime(false);
         
    }
};
 
    return(
      
        <Contexto.Provider value={{animationTime, setAnimationTime,handleMouseOver,animationHandle}}>
            {children}
        </Contexto.Provider>
    )
}
export default AuthProvider;