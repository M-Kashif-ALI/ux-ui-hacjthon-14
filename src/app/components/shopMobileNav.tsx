"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const ShopMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className='flex items-center hover:border-black'><HiBars3BottomRight className='text-[#252B42] text-lg' /></button>
      ) : (
        <button onClick={() => setIsOpen(false)} className='flex items-center hover:border-black'><RxCross2 className='h-5 w-5' /></button>
      )}

      {
        isOpen && <div className='absolute top-20 right-[1px] z-20 bg-white w-full'>
          <ul className='flex flex-col items-center justify-center text-2xl space-y-7 '>
            <li>
              <Link href={'/'} className='block py-2 pr-4 text-[#737373] sm:text-3xl rounded md:p-0 hover:text-white'>Home</Link>
            </li>

            <li>
              <Link href={'/shop'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>
                Shop
              </Link>
            </li>

            <li>
              <Link href={'/about'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>About</Link>
            </li>

            <li>
              <Link href={'/blog'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>Blog</Link>
            </li>

            <li>
              <Link href={'/contact'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>

            <li>
              <Link href={'/'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>Pages</Link>
            </li>
            
            <li>
            <div className=''>
            <div className='flex gap-2 items-center text-[#23A6F0]'>
              <CgProfile />
              <p className='text-2xl font-bold'>Login / Register</p>
            </div>
          </div>
            </li>

            <li className='text-[#23A6F0]'>
              <div className='flex flex-col gap-4'>
                <CiSearch />

              <div className='flex gap-1'>
                  <BsCart />
                  <p>1</p>
                </div>

                <div className='flex gap-1'>
                <CiHeart />
                <p>1</p>
              </div>

              </div>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default ShopMobileNav