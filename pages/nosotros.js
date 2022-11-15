import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import style from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (    

    <Layout
      pagina = 'Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={style.contenido}>
          <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt='Imagen Logo'/>

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices condimentum diam, sit amet suscipit velit aliquam et. Morbi dapibus maximus risus, nec porttitor nunc sollicitudin sed. Nulla sit amet lectus sem. Maecenas sollicitudin convallis vehicula. Suspendisse quis finibus arcu. Nullam suscipit euismod ornare. In et arcu sodales, efficitur justo vel, pretium nulla. Suspendisse eu enim vehicula, vulputate quam id, blandit mi.</p>
            <p>Aliquam imperdiet scelerisque nibh non gravida. Aenean felis velit, tincidunt sit amet laoreet at, pretium vitae sem. Fusce porttitor metus iaculis sapien suscipit commodo. Vestibulum non dictum est, vitae volutpat mi. Cras tortor massa, euismod a mollis eget, sodales ac lectus. Aliquam dapibus aliquet eros et finibus. Curabitur vestibulum ullamcorper nulla, vel ultrices dui consequat sed. Vivamus leo ex, scelerisque ut odio non, consequat imperdiet elit.</p>
          </div>
        </div>
      </main> 
    </Layout>

  )
}

export default Nosotros
