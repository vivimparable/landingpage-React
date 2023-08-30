import React, { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function ContactMe() {
  const [showError, setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [formulario, setFormulario] = useState({
    from_name:'',
    message:'',
    to_name:'Javier Garcia Urruchi'
  })

  const form = useRef<HTMLFormElement | null>(null); 
   const handleSubmit =(e:FormEvent)=>{
    e.preventDefault();
    if(formulario.message.length === 0 || formulario.from_name.length===0){
       setError(true);
       setErrorMessage('Error, you have to fill all the inputs.')
      setTimeout(() => {
        setError(false)
      }, 5000);
    }else{
      setError(true);
      setFormulario({
        from_name:'',
        message:'',
        to_name:'Javier Garcia Urruchi'
      });
      setErrorMessage('The form has been sent.')
     setTimeout(() => {
       setError(false)
     }, 5000);

     emailjs
      .send('service_h8g9i16', 'template_0p9pemq', formulario, 
      'J6soMWU70WzsGOnCZ',)
      .then(
        function(response) {
          console.log('SUCCESS!', response.status, response.text);
        },  
        function(error) {
          console.log('FAILED...', error);
        }
      );

    }



  }
  return (
    <>
    <div className='formulario'>
    {
      showError&&(
      <div className={`${errorMessage}`}>
        <h3 className={errorMessage.includes('Error')  ? 'errorMessage'  :'not-errorMessage'}> {errorMessage} </h3>
      </div>)
    }
    <form ref={form} onSubmit={handleSubmit}> 
        <div className='form-email'>   
          <input onChange={(e)=> setFormulario({...formulario, from_name: e.target.value})} value={formulario.from_name}  placeholder='Email' type="email" name='email' />
        </div>
        <div className='form-area'>
          <textarea onChange={(e)=> setFormulario({...formulario, message: e.target.value})}  value={formulario.message} name="" id=""placeholder='Mensaje'  ></textarea>
        </div>
        <button type='submit'>Enviar</button> 
    </form>
    </div>
    </>
  )
}

export default ContactMe
