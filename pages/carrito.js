import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import style from '../styles/Carrito.module.css'
import Image from 'next/image'

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {
    //console.log(carrito)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.precio), 0)

        setTotal(calculoTotal)
    }, [carrito]);

  return (
    <Layout
        pagina= 'Carrito de compra'
    >
      <h1 className='heading'>Carrito</h1>
      <main className={`contenedor ${style.contenido}`}>          
          <div className={style.carrito}>
              <h2>Articulos</h2>
              {carrito.lenght === 0 ? 'Carrito Vacio' : 
                  carrito.map((producto)=>(
                    <div key={producto._id} className={style.producto}>
                        <div>
                            <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} ></Image>
                        </div>
                        <div>
                            <p className={style.nombre}>{producto.nombre}</p>
                            <div className={style.cantidad}> 
                                <p>Cantidad: </p>                               
                                <select
                                    value={producto.cantidad}
                                    className={style.select}
                                    onChange={(e)=> actualizarCantidad({
                                        cantidad: e.target.value,
                                        _id: producto._id
                                    })}                                    
                                >                                    
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>
                            </div>
                            <p className={style.precio}><span>$ {producto.precio}</span></p>
                            <p className={style.sudtotal}>SubTotal: <span>$ {producto.precio * producto.cantidad}</span></p>
                        </div>
                        <button 
                            className={style.eliminar} 
                            type='button'
                            onClick={()=> eliminarProducto(producto._id)}
                        >X</button>
                    </div>
                ))}
          </div>

          <div className={style.resumen}>              
                {total > 0 ?(
                    <>
                    <h3>Resumen del Pedido</h3>
                    <p>Totala pagar: $ {total} </p>
                    </>
                ):(
                <>
                    <p>No hay Pedido</p>
                </> 
                )}
          </div>

      </main>
    </Layout>
  )
}

export default Carrito
