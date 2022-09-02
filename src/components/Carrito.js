import { useDataGlobal } from "./context/TagApiProvider"
import { useState } from "react"
import { BsXLg } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const CarritoSection = () => {


  const { showCar, showHidenCar, carritoProd, setCarritoProd } = useDataGlobal()

  const removeElementCarrito = id => {
    const newArrCarrito = carritoProd.filter(artuculo => artuculo.id !== id);
    setCarritoProd(newArrCarrito);
  }

  return (
    <div className={`${showCar ? 'showCarrito' : 'hiddenCarrito'} fixed top-0 w-[90%] md:w-[30rem] h-[100vh] bg-black/60 backdrop-blur-md z-20 overflow-y-auto p-[0.2rem]`}>
      <div className="relative">
        <BsXLg onClick={showHidenCar} className="absolute left-3 top-3 text-2xl text-slate-50/90 cursor-pointer" />
      </div>
      <div className="relative top-20 w-[90%] mx-auto h-[2px] bg-slate-50/50"></div>
      <div className="relative top-28 w-[100%] p-[0.3rem]">
        {carritoProd.length === 0 ?
          (
            <p> no hay productos</p>
          ) : (
            carritoProd.map(datos => {
              return (
                <div className='relative flex flex-col sm:flex-row-reverse justify-end items-center mb-5 p-4 gap-2 shadow-lg' key={datos.id}>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50/80 mb-2">{datos.name}</h3>
                    <h4 className="text-sm text-slate-50/60 font-semibold mb-2">color: <span className="text-slate-50/90">{datos.colour}</span></h4>
                    <div className="flex items-center gap-4 mb-2">
                      <select
                        className="bg-black/30 focus:bg-black/80 text-slate-50/80 font-semibold p-1 rounded-sm cursor-grab" name="cantidad" id="cantidad"
                      >
                        <option className="text-slate-50/90 font-semibold" value=""> -- select quantity -- </option>
                        <option className="text-slate-50/90 font-semibold" value="1">1</option>
                        <option className="text-slate-50/90 font-semibold" value="2">2</option>
                        <option className="text-slate-50/90 font-semibold" value="3">3</option>
                        <option className="text-slate-50/90 font-semibold" value="4">4</option>
                        <option className="text-slate-50/90 font-semibold" value="5">5</option>
                        <option className="text-slate-50/90 font-semibold" value="6">6</option>
                        <option className="text-slate-50/90 font-semibold" value="7">7</option>
                        <option className="text-slate-50/90 font-semibold" value="8">8</option>
                        <option className="text-slate-50/90 font-semibold" value="9">9</option>
                      </select>
                    </div>
                    <span className="text-xs font-semibold text-slate-50/80">{datos.price.current.text}</span>
                  </div>
                  <div className="w-16">
                    <img src={'http://' + datos.imageUrl} alt="" />
                  </div>
                  <div onClick={() => removeElementCarrito(datos.id)} className="absolute right-4 bottom-4 p-1 bg-red-500/70 rounded-sm hover:bg-red-500/90 hover:shadow-md cursor-pointer">
                    <span className="text-sm text-slate-50/90 font-semibold">Eliminar</span>
                  </div>
                </div>
              )
            }))
        }
      </div>
    </div>
  )
}

export default CarritoSection