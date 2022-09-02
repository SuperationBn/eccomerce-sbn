import React from 'react'
import Image from 'next/image'

const SliderInfo = ({ titulo, imgUrl }) => {
  return (
    <div className="w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-2 md:place-content-center">
      <div className="text-left w-[100%] h-[100%] flex flex-col justify-center px-4">
        <h2 className="h2Hero leading-11 capitalize text-[3.4rem] md:text-[2.7rem] font-bold text-slate-50/95">{titulo}</h2>
        <p className='text-[1rem] mt-8 text-slate-50/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur quia suscipit minima vero perspiciatis dolore adipisci animi repudiandae. Magni.</p>
      </div>
      <div className='hidden md:block boxImgHero'>
        <Image layout='responsive' width={100} height={140} src={imgUrl} alt="img" loading='lazy' />
      </div>
    </div>
  )
}

export default SliderInfo