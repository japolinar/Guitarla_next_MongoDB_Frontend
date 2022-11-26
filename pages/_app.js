import '../styles/normalize.css'
import '../styles/globals.css'
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2';

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS)
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito]);

  const agregarCarrito = (producto)=>{
    if(carrito.some((articulo) => articulo._id === producto._id)){
      //console.log("Producto duplicado")
      const carritoActualizado = carrito.map((articulo)=> {
        if(articulo._id === producto._id){
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(carritoActualizado)

    }else{
      //console.log("Nuevo Producto")
      setCarrito([
        ...carrito,
        producto
      ])
    }    
  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo)=> {
      if(articulo._id === producto._id){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = (id) =>{
    //console.log(id)
    const carritoActualizado = carrito.filter( (articulo)=> articulo._id !== id)    

    Swal.fire({
      title: 'Estas Seguro?',
      text: "Deseas Eliminar el artuculo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        setCarrito(carritoActualizado)

        Swal.fire(
          'Eliminado!',
          'Tu Articulo se ha eliminado.',
          'success'
        )
      }
    })
  }

  return (
    <Component 
      {...pageProps} 
      carrito={carrito} 
      agregarCarrito={agregarCarrito} 
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  )
  
}

export default MyApp
