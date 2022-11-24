import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, cursos, entradas}) {
  // console.log(guitarras)
  // console.log(cursos)
  // console.log(entradas)
  return ( 
    <Layout
      pagina = 'Inicio'
      guitarra={guitarras[1]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1> 
        <Listado
          guitarras={guitarras}
        ></Listado>
      </main>  

      <Curso
        cursos={cursos}
      ></Curso>

      <section className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        ></ListadoBlog>
      </section>
          
    </Layout>
    
  )
}

export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`

  const [resGuitarras, resCursos, resBlogs]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras, cursos, entradas]= await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
  ])

  return{
    props:{
      guitarras: guitarras,
      cursos: cursos,
      entradas: entradas
    }
  }

}
