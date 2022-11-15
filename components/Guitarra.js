import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    //console.log(guitarra)
    const {descripcion, imagen, nombre, precio, url} = guitarra

  return (
    <div className={style.guitarra}>
      <Image 
        layout="responsive" 
        width={180} 
        height={350} 
        src={imagen.url} 
        alt={`Imagen Guitarra ${nombre}`}      
      ></Image>
      
      <div className={style.contenido}>
        <h3>{nombre}</h3>
        <p className={style.descripcion}>{descripcion}</p>
        <p className={style.precio}>$ {precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={style.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
