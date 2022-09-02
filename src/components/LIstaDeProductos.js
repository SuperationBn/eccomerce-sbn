// import Image from "next/image";
// import { BsBasket } from "react-icons/bs";
import CardProductosTag from "./CardProductos";



const LIstaDeProductosSection = ({ respuestas }) => {



  const datosListAll = [respuestas.products];
  const los20ProductosMas = datosListAll[0].slice(3, 23);



  return (
    <div className='mt-24'>
      <div
        className='gridProductos grid grid-cols-1 md:grid-cols-3 gap-3'>
        {los20ProductosMas && los20ProductosMas.map(datos => {
          return (
            <CardProductosTag key={datos.id} repuestas={datos} />
          )
        })}
      </div>
    </div>
  )
}

export default LIstaDeProductosSection