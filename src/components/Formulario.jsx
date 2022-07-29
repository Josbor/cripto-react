import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Currency from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'
import InfoCripto from './InfoCripto'
import MensajeError from './MensajeError'



//STYLE
const Boton=styled.input`

margin: 10px auto;
font-family:'lato',sam-serif;
font-size: 20px;
font-weight: 900;
background-color: #9497FF;
display:block;
padding: 10px;
width: 100%;
border-radius: 5px;
text-transform: uppercase;
color: #ffff;

transition: background-color 0.5s ease;
&:active{

  width: 90%;
  padding: 9px;
  
}
:hover{
  background-color:#7A7DFE ;
  
}
`
//STYLE
const Formulario = () => {
  const [criptos,setCriptos]=useState([])
  const [error,setError]=useState(false)
  const [infocripto,setInfocripto]=useState({})
  
 
 
  useEffect(()=>{// consulta a la api
    const respuestaapi = async ()=>{
      const url ='https://min-api.cryptocompare.com/data/top/totalvolfull?tsym=USD&ascending=true';
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const filtro= resultado.Data.map(d=>({'Id':d.CoinInfo.Name,'Descripcion':d.CoinInfo.FullName}))
      setCriptos(filtro)
      }
      respuestaapi()

  },[])

  const handleSubmit=e =>{
    e.preventDefault()
    
    if ([Moneda,Cripto].includes('')){
      setError(true)
      return
    }
    setError(false)
   
    const consultarprecio= async ()=>{
     
      const urlconsulta=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Cripto}&tsyms=${Moneda}`
      const respuesta= await fetch(urlconsulta)
      const resultado= await respuesta.json()
      const datos= resultado.DISPLAY[Cripto][Moneda]
      const filtro={
            'precio':datos.PRICE,
            'preciomasalto':datos.HIGHDAY,
            'preciomasbajo':datos.LOWDAY,
            'variacion24horas':datos.CHANGEPCT24HOUR,
            'ultimaactualizacion':datos.LASTUPDATE,
            'imagen': `https://www.cryptocompare.com/${datos.IMAGEURL}`
      }
     
      setInfocripto(filtro)
    }
    consultarprecio()
  }


  const [Moneda,SelectModena]=useSelectMonedas('Elija la Moneda',Currency);
  const [Cripto,SelectCripto]=useSelectMonedas('Elija la Cripto',criptos);
  return (
    <>
    {error&&<MensajeError> todos los campos son Obligatorios</MensajeError>}
    <form  onSubmit={handleSubmit}>
      <SelectModena/>
      <SelectCripto/>
    <Boton type='submit' value="cotizar"/>

    </form>
    {Object.keys(infocripto).length>0&& 
     <InfoCripto
    infocripto={infocripto}
    />
    }
    </>
   
  )
}

export default Formulario