import React from 'react'
//import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import style from '../../styles/Entrada.module.css'


const EntradaBlog = ({entrada}) => {
  //const router = useRouter()
  //console.log(router.query)
  //console.log(entrada)
  const {contenido, imagen, published_at, titulo}=entrada  

  return (
    <Layout
      pagina = {titulo}
    >
      <main className='contenedor'>        
        <h1 className='heading'>{titulo}</h1>

        <article className={style.entrada}>
          <Image 
              src={imagen.url} 
              alt={`imagen blog ${titulo}`} 
              width={800}
              height={600}
              layout= 'responsive'
              //priority="true"
          ></Image>
          <div className={style.contenido}>            
              <p className={style.fecha}>{formatearFecha(published_at)}</p>
              <p className={style.texto}>{contenido}</p>            
          </div>
        </article>

      </main>
    </Layout>
  )
}

export async function getStaticPaths (){
  const url = `${process.env.API_URL}/blogs`  
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  const paths = entradas.map((entrada)=>({
    params: {url: entrada.url}
  }))
  //console.log(paths)

  return{
    paths,
    fallback: false
  }
} 

export async function getStaticProps({params: {url}}){  
  //console.log(id)

  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  //console.log(urlBlog)

  const respuesta = await fetch(urlBlog)
  const entrada = await respuesta.json()
  //console.log(entrada)   

  return{
    props:{
      entrada: entrada[0]
    }
  }
}

// export async function getServerSideProps({query: {id}}){  
//   //console.log(id)

//   const url = `${process.env.API_URL}/blogs/${id}`
//   console.log(url)

//   const respuesta = await fetch(url)
//   const entrada = await respuesta.json()
//   console.log(entrada)   

//   return{
//     props:{
//       entrada: entrada
//     }
//   }
// }

export default EntradaBlog
