import React, {useState} from 'react'
import Image from 'next/image'
import style from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'

const Producto = ({guitarra, agregarCarrito}) => {
    //console.log(guitarra)
    const [cantidad, setCantidad] = useState(1);
    const {descripcion, imagen, nombre, precio, id} = guitarra[0]

    const handleSumit = (e)=>{
        e.preventDefault()

        //Validamos el option
        if(cantidad <= 0){
            alert('Cantidad No Valida')
            return
        }
        //Agregarlo al carrito
        const guitarraSeleccionada ={
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)

    }
  return (
    <Layout
        pagina={nombre}
    >
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
                
                <form className={style.formulario} onSubmit={handleSumit}>
                    <label>Cantidad:</label>

                    <select
                        value={cantidad}
                        onChange={(e)=> setCantidad(parseInt(e.target.value))}
                    >
                        <option value='0'>--Selecione--</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                    </select>

                    <input
                        type='submit'
                        value='Agregar al Carrito'
                    ></input>
                </form>        
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    //console.log(url)
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    //console.log(guitarra)

    return{
        props:{
            guitarra: guitarra
        }
    }
}

export default Producto
