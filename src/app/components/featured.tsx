import Image from 'next/image'
import React from 'react'
import { featured } from '../data'

const Featured = () => {
  return (
    <section className="h-auto w-full flex flex-col items-center py-10">
      <div className="flex flex-col items-center w-full justify-center">
        {/* Header Section */}
        <div className="w-[90%] md:w-[607px] h-auto flex flex-col items-center text-center mb-8">
          <h3 className="font-bold text-2xl md:text-3xl">BESTSELLER PRODUCTS</h3>
          <p className="font-[400] text-sm text-[#737373] mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>

      <div className='h-[615px] flex flex-wrap items-center justify-center gap-[30px]'>
        {
          featured.map((d) => (
            <div key={d.id}>
            <div>
          <Image src={d.img} alt={d.name} height={1000} width={1000} className='h-[427px] w-[239px]' />
        </div>
        <div className='h-[188px] w-[239px] flex flex-col items-center gap-3 mt-2'>
          <h5 className='font-bold'>{d.name}</h5>
          <p className='text-sm font-bold text-[#737373]'>{d.department}</p>
          <div className='font-bold flex gap-3'>
            <p className='text-[#BDBDBD]'>$16.48</p>
            <h5 className='text-[#23856D]'>$6.48</h5>
          </div>

          <div className='flex gap-2'>
            <p className='bg-[#23A6F0] h-[16px] w-[16px] rounded-full cursor-pointer'></p>
            <p className='bg-[#23856D] h-[16px] w-[16px] rounded-full cursor-pointer'></p>
            <p className='bg-[#E77C40] h-[16px] w-[16px] rounded-full cursor-pointer'></p>
            <p className='bg-[#252B42] h-[16px] w-[16px] rounded-full cursor-pointer'></p>
          </div>
        </div>
        </div>
          ))
        }
      </div>
    </section>
  )
}

export default Featured