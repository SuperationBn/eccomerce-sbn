import { createContext, useContext, useEffect, useState } from "react"

const ApiContext = createContext()

const useDataGlobal = () => useContext(ApiContext);

const TagApiProviderGlobal = ({ children }) => {
  const [carritoProd, setCarritoProd] = useState([])
  const [zoonImg, setZoonImg] = useState('');
  const [showCar, setShowCar] = useState(false)
  // ----------------
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarritoProd(carritoStorage)
  }, [])


  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carritoProd));
  }, [carritoProd])

  const getUrlImgZoon = e => {
    if (e.target.tagName) {
      setZoonImg(e.target['data-loaded-src']);

    }
  }

  const datosDeLosProductos = productos => {
    // console.log(e.target.parentNode['childNodes'][0].textContent);

    if (carritoProd.some(articulo => articulo.id === productos.id)) {
      const carritoActualizado = carritoProd.map(articulo => {
        if (articulo.id === productos.id) {
          articulo.cantidad = productos.cantidad + articulo.cantidad
        }
        return articulo;
      })

      setCarritoProd(carritoActualizado)
    } else {

      setCarritoProd([...carritoProd, productos]);
    }

  }

  const showHidenCar = () => {
    setShowCar(!showCar)
  }

  // const addProdectCard = () => setCantidadCarrito(cantidadCarrito + 1);

  return (
    <ApiContext.Provider value={{
      zoonImg,
      getUrlImgZoon,
      open,
      handleOpen,
      handleClose,
      carritoProd,
      datosDeLosProductos,
      showCar,
      showHidenCar,
      setCarritoProd,
    }}>
      {children}
    </ApiContext.Provider>
  )
}

export { useDataGlobal, TagApiProviderGlobal, }