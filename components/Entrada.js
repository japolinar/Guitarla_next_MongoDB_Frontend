import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {formatearFecha} from '../helpers/index'
import style from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    //console.log(entrada)
    const {titulo, resumen, imagen, published_at, id, url} = entrada
    //console.log(imagen.url)
  return (
    <article>
        <Image 
            src={imagen.url} 
            alt={`imagen blog ${titulo}`} 
            width={800}
            height={600}
            layout= 'responsive'
            //priority="true"
        ></Image>
        <div className={style.contenido}>
            <h3>{titulo}</h3>
            <p className={style.fecha}>{formatearFecha(published_at)}</p>
            <p className={style.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`} >
                <a className={style.enlace}>Leer Entrada</a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada
