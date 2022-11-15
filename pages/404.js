import React from 'react'
import Link from 'next/link'
import style from '../styles/NoEncontrado.module.css'
import Image from 'next/image'


const NoEncontrado = () => {
  return (    
    <div className={style.noEncontrado}>
        <div className={style.imagen}>
            <Image width={400} height={100} src='/img/logo.svg' alt='Imagen Logo'/>
        </div>        
        <h1 className='heading'>Pagina No encontrada</h1>

        <Link href="/">Volver al Inicio</Link>
    </div> 
  )
}

export default NoEncontrado
