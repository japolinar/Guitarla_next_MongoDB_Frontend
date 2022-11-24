import React from 'react'
import Layout from '../components/Layout'
import Listado from '../components/Listado'


const tienda = ({guitarras}) => {
  //console.log(guitarras)
  return (
    <Layout
      pagina = 'Tienda Virtual'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <Listado
          guitarras={guitarras}
        ></Listado>
      </main> 
    </Layout>
  )
}

export async function getServerSideProps(){
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`

  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  console.log(guitarras)

  return{
    props:{
      guitarras: guitarras
    }
  }

}

export default tienda
