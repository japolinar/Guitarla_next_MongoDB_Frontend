import React from 'react'
import Entrada from '../components/Entrada'
import style from '../styles/Blog.module.css'

const ListadoBlog = ({entradas}) => {
  return (
    <>
      <h2 className='heading'>Blog</h2>  
        <div className={style.blog}>
          {entradas.map( (entrada)=>(
            <Entrada
              key={entrada._id}
              entrada={entrada}
            ></Entrada>
          ))}
        </div>
    </>
  )
}

export default ListadoBlog
