import React from 'react'
import { CiHeart, CiMail, CiSearch} from 'react-icons/ci'
import { BsCart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import { FaAngleDown, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import ShopMobileNav from './shopMobileNav'

const ShopNavBar = () => {
  return (
    <header>
      <section className='md:block hidden'>
        <div className='h-[58px] w-full bg-[#23856D] text-white flex items-center px-5'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex justify-between w-[400px] px-3'>
              <div className='flex items-center gap-1'>
                <FiPhone className='w-[16px] h-[16px]' />
                <p className='text-[14px]'>(225) 555-0118</p>
              </div>

              <div className='flex items-center gap-1'>
                <CiMail className='w-[16px] h-[16px]' />
                <p className='text-[14px]'>michelle.rivera@example.com</p>
              </div>
            </div>
            <div>
              <p className='font-bold text-[14px]'>Follow Us  and get a chance to win 80% off</p>
            </div>

            <div className='flex gap-2 items-center'>
              <div><p className='font-bold text-[14px]'>Follow Us:</p></div>
              <div className='flex gap-3'>
              <FaInstagram className='h-[16px] w-[16px]' />
                <FaYoutube className='h-[16px] w-[16px]' />
                <FaFacebook className='h-[16px] w-[16px]' />
                <FaTwitter className='h-[16px] w-[16px]' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className='px-5 my-3 flex items-center justify-between'>
        <h1 className='text-2xl font-bold h-[32px] w-[108px] mr-10'>Bandage</h1>

        <section className='md:block hidden'>
          <ul className='flex gap-5 text-[14px] font-semibold text-[#737373]'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/shop'><li className='flex items-center gap-1'>Shop <FaAngleDown /></li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/blog'><li>blog</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
            <Link href='/'><li>Pages</li></Link>
          </ul>
        </section>

        <section className='h-[54px] w-[324px] flex gap-4 items-center'>
          <div className='md:block hidden'>
            <div className='flex gap-2 items-center text-[#23A6F0]'>
              <CgProfile />
              <p className='text-sm font-bold'>Login / Register</p>
            </div>
          </div>

          <div className='md:text-[#23A6F0] flex gap-3 md:justify-evenly w-[50%]'>
            <div className='flex justify-between md:w-[45%] pl-16 md:pl-0 md:gap-0 gap-3'>
            <CiSearch className='md:block hidden'/>

              <div className='md:block hidden'>
                <div className='flex gap-1'>
                  <BsCart />
                  <p>1</p>
                </div>
              </div>

              <div className='md:hidden block ml-10'>
                <ShopMobileNav />
              </div>
            </div>

            <div className='md:block hidden'>
              <div className='flex gap-1'>
                <CiHeart />
                <p>1</p>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </header>
  )
}

export default ShopNavBar