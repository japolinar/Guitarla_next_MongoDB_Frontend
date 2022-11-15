import React from 'react'
import styles from '../styles/Curso.module.css'

const Curso = ({cursos}) => {
    //console.log(cursos)

    const {contenido, titulo, imagen } = cursos
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
          <div className={styles.contenido}>
              <h2 className='heading'>{titulo}</h2>
              <p className={styles.texto}>{contenido}</p>

              <a className={styles.enlace} href='#'>Mas Informacion</a>
          </div>
      </div>

      <style jsx>{`
        section{
            padding: 5rem 0;
            margin-top: 5rem;
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
            background-size: cover;
            background-position: center;
        }
      
      `}</style>

    </section>
  )
}

export default Curso
