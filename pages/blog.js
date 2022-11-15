import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const blog = ({entradas}) => {

  return (
    <Layout
      pagina = 'Blog'
    >
      <main className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        ></ListadoBlog>
      </main> 
    </Layout>
  )
}

export async function getStaticProps(){
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  //console.log(entradas)    

  return {
    props:{
      entradas: entradas
    }
  }
}

export default blog
