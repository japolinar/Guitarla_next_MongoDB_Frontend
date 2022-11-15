import React from 'react'
import Link from 'next/link'
import style from '../styles/Header.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = ({guitarra}) => {
  //console.log(guitarra)

  const router = useRouter()
  return (
    <header className={style.header}>
      <div className='contenedor'>
        <div className={style.barra}>
          <Link href='/'>
            <a>
              <Image width={400} height={100} src='/img/logo.svg' alt='Imagen Logo'/>
            </a>
          </Link>

          <nav className={style.navegacion}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito'>
              <a>
                <Image 
                  layout="fixed" width={30} height={25} src="/img/carrito.png" alt='Imagen Carrito'
                ></Image>
              </a>
            </Link>
          </nav>
        </div>
        {guitarra && (
          <div className={style.modelo}>
            <h2>Modelo {guitarra.nombre}</h2>
            <p>{guitarra.descripcion}</p>
            <p className={style.precio}>$ {guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={style.enlace}>
                Ver Producto
              </a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <div className={style.guitarra}>
          <Image                      
            src='/img/header_guitarra.png' 
            alt='Imagen Header Guitarra'
            layout="fixed" width={500} height={1200}  
            />
        </div>
      )}
    </header>
  )
}

export default Header
