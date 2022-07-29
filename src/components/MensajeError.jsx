import styled from '@emotion/styled'
import React from 'react'

const Mensaje=styled.div`
    display: block;
    font-family: 'lato',sans-serif;
    color: #fff;
    padding: 5px;
    margin: 0 auto;
    background-color: #a43434;
    text-align: center;
    text-transform  :uppercase ;
    font-weight: 900;
`
const MensajeError = ({children}) => {
  return (
    <Mensaje>
       <p>{children}</p> 
    </Mensaje>
  )
}

export default MensajeError
