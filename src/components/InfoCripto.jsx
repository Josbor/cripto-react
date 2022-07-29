import React from 'react'
import styled from '@emotion/styled'

const Container=styled.div`
    width:100% ;
    display: grid;
    margin: 20px auto;
    grid-template-columns: 1.2fr 3fr;
    column-gap: 1rem;
    color: #fff;

    p{
        font-family: 'lato',sans-serif;
        font-size: 18px;
    }
    p:first-child{
        font-size: 25px;
    }
    span{
        font-weight: 700;
    }

`
const Imagencripto=styled.img`
    display: block;
    max-width:100%;
    margin: auto auto;
    
`

const InfoCripto = ({infocripto}) => {
    const {precio,
            preciomasalto,
            preciomasbajo,
            variacion24horas,
            ultimaactualizacion,
            imagen,
                }=infocripto
  return (
    <Container>
      <Imagencripto src={imagen} alt="imagen" />
      <div>
      <p>El precio es de : <span>{precio}</span></p>
      <p>Precio mas alto del dia: <span>{preciomasalto}</span></p>
      <p>Precio mas Bajo del dia: <span>{preciomasbajo}</span></p>
      <p>Variacion ultimas 24 horas: <span>{variacion24horas}</span></p>
      <p>Ultima Actualizacion: <span>{ultimaactualizacion}</span></p>
      </div>
    </Container>
  )
}

export default InfoCripto
