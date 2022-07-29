import { useState } from 'react'
import  styled  from '@emotion/styled'
import imagen from './img/imagen-criptos.png'
import Formulario from './components/Formulario'


const Container=styled.div`
max-width:900px;
margin:0 auto;


@media (min-width:900px){

  display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;

}

`
const Heading=styled.h1`
font-family:'lato',sam-serif;
font-size: 34px;
color:#fff;
margin-top: 80px ;
margin-bottom: 50px;
text-align: center;

  ::after{
  content:"";
  display: block;
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  margin:10px auto 0 auto;

}

`

const Imagen =styled.img`
max-width: 400px;
width: 80%;
margin:100px auto 0 auto;
display: block;
`
function App() {
  

  return (
    <div className="App">
     
      <Container>
       
        <Imagen src={imagen} alt="imagen-criptos" />
       
      

       <div>
        <Heading>Cotiza Criptomonedas al Instante </Heading>
        <Formulario/>
       </div>
      
       
      </Container>
     
     
     
      
     
    </div>
  )
}

export default App
