import { BsCart4 } from "react-icons/bs";
import { useDataGlobal } from "./context/TagApiProvider";

const Header = () => {

  const { carritoProd, showHidenCar } = useDataGlobal()

  return (
    <header className="w-[100%] py-2 px-10 flex justify-between items-center rounded-md">
      <div>
        <h1 className="tracking-wider text-slate-50/90 text text-[1.7rem] font-bold uppercase">shoe world</h1>
      </div>
      <div className="relative">
        <BsCart4 onClick={showHidenCar} className="text-2xl cursor-pointer text-slate-50/90" />
        <p className="bg-red-500 absolute px-[0.28rem] text-[0.6rem] -top-1 left-4 z-10 text-slate-50 rounded-full">{carritoProd.length}</p>
      </div>
    </header>
  )
}

export default Header