import React from 'react'
import Guitarra from './Guitarra'
import style from '../styles/Listado.module.css'

const Listado = ({guitarras}) => {
    //console.log(guitarras)
  return (
    <div className={style.listado}>
      {guitarras.map((guitarra)=>(
          <Guitarra 
            key={guitarra.url}
            guitarra={guitarra}
          ></Guitarra>
      ))}
    </div>
  )
}

export default Listado
