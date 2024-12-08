"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className='flex items-center hover:border-black'><HiBars3BottomRight className='text-[#252B42] text-lg' /></button>
      ) : (
        <button onClick={() => setIsOpen(false)} className='flex items-center hover:border-black'><RxCross2 className='h-5 w-5' /></button>
      )}

      {
        isOpen && <div className='absolute top-20 right-0 z-20 bg-white w-full'>
          <ul className='flex flex-col items-center justify-center font-bold text-2xl space-y-7 '>
            <li>
              <Link href={'/'} className='block py-2 pr-4 text-[#737373] sm:text-3xl rounded md:p-0 hover:text-white'>Home</Link>
            </li>

            <li>
              <Link href={'/shop/product'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>
                Product
              </Link>
            </li>

            <li>
              <Link href={'/procing'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>Pricing</Link>
            </li>

            <li>
              <Link href={'/contact'} className='block py-2 pr-4 text-[#737373] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default NavBarMobile