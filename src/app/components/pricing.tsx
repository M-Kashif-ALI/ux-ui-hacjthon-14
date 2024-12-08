import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import NavBarMobile from './navBarMobile'
import { Link } from 'lucide-react'

const Pricing = () => {
  return (
      <nav className='px-5 my-3 flex items-center justify-around'>
        <h1 className='text-2xl font-bold h-[32px] w-[108px] mr-10'>Bandage</h1>

        <section className='md:block hidden'>
          <ul className='flex gap-5 text-[14px] font-semibold text-[#737373]'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/product'><li>Product</li></Link>
            <Link href='/pricing'><li>Pricing</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
          </ul>
        </section>

        <section className='h-[54px] w-[324px] flex gap-4 items-center'>
          <div className='md:block hidden'>
            <div className='flex gap-[30px] items-center text-white'>
              <p className='text-sm text-blue-500 font-bold'>Login</p>
              <button className='text-sm bg-[#23A6F0] h-[52px] w-[214px] font-bold rounded flex items-center justify-center gap-3'>Become a Member <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </section>

        <div className='md:hidden block'>
          <div className='flex gap-2'>
            <div className='flex gap-3 text-lg'>
              <CiSearch />
              <IoCartOutline />
            </div>
            <NavBarMobile />
          </div>
        </div>
      </nav>
  )
}

export default Pricing