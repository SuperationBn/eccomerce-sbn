import React from 'react'
import { BsBasket } from "react-icons/bs";
import Image from "next/image";
import { useDataGlobal } from './context/TagApiProvider';


const CardProductosTag = ({ repuestas }) => {

  const { handleOpen, getUrlImgZoon, datosDeLosProductos } = useDataGlobal()

  const { imageUrl, name, price, id, colour } = repuestas;


  const allEvents = (e) => {
    handleOpen();
    getUrlImgZoon(e);
  }

  const datosBox = {
    imageUrl,
    name,
    price,
    id,
    colour
  }

  const mandarDatos = () => datosDeLosProductos(datosBox);

  return (
    <div
      className="dosPrimerosClas grid grid-cols-1 place-content-center place-items-center gap-2 p-2 mb-4 rounded-lg shadow-lg hover:shadow-xl">
      <div className="w-[100%] sm:w-[250px] md:w-[100%] cursor-pointer overflow-hidden hover:shadow-xl">
        <Image className="object-cover" onClick={allEvents} layout="responsive" width={300} height={300} src={'http://' + imageUrl} alt='' />
      </div>
      <div className="relative col-span-2 h-[100%] w-[100%]">
        <h3 className="text-[1.2rem] font-bold">{name}</h3>
        <h4 className="my-8 text-[1.8rem] font-semibold">{price['current'].text}</h4>
        <BsBasket onClick={mandarDatos} className="absolute right-10 bottom-2 md:bottom-4 text-2xl text-cyan-700 hover:text-cyan-600 cursor-pointer" />
      </div>
    </div>
  )
}

export default CardProductosTag