import React from 'react'
import ShopNavBar from '../components/shopNavBar'
import { IoIosArrowForward } from 'react-icons/io'
import ShopBanner from '../components/shopBanner'

const Shop = () => {
  return (
    <div>
      <ShopNavBar />
      <section className='bg-[#FAFAFA]'>
        <div className='h-[92px] md:w-[1100px] mx-auto flex flex-col md:flex-row md:justify-between items-center justify-center'>
          <h3 className='font-bold text-2xl'>Shop</h3>
          <div className='flex gap-[5px] items-center'>
            <p className='text-sm font-bold'>Home</p> <IoIosArrowForward className='h-[16px] w-[9px] text-[#BDBDBD]' /> <h6 className='font-bold text-sm text-[#BDBDBD]'>Shop</h6>
          </div>
        </div>
      </section>
      <ShopBanner />
    </div>
  )
}

export default Shop