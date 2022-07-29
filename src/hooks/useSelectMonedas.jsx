import styled from '@emotion/styled'
import { useState } from 'react'

const Nombre=styled.label`
    font-family:'lato',sans-serif;
    font-size: 25px;
    font-weight: 700;
    color:#fff;
    display:block;
    margin: 10px 0;
    ;
`
const Opciones=styled.select`
    font-family:'lato',sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    margin: 10px 0;


`

const useSelectMonedas = (titulo,opciones) => {// en los custom hooks puedes importar funciones o codigo htnl como si fuese un componente
const [estado,setEstado]=useState('');   
    
   
    const SeleccionMonedas=()=>{
       
        return(
                <>
                
                <Nombre>{titulo} </Nombre>
                <Opciones value={estado} onChange={e=>setEstado(e.target.value)}>
                 <option value="" >Seleccione</option>
                 {opciones.map(opcion=>(
                   <option key={opcion.Id} value={opcion.Id}>{opcion.Descripcion}</option>     
                ))}
                </Opciones>
            
                </>
                
            )
    }
 
 
 
    return [estado,SeleccionMonedas]
}

export default useSelectMonedas
