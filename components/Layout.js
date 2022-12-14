import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
          <title>GuitarLA {pagina} </title>
          <meta name='description' content='Sitio Web de venta de guitarras'></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@700&display=swap" rel="stylesheet"/>
      </Head>

      <Header
        guitarra={guitarra}
      ></Header>

      {children}

      <Footer></Footer>
    </div>
  )
}

Layout.defaultProps={
  guitarra: null
}

export default Layout
