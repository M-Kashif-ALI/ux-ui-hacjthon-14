import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import NavBarMobile from '../components/navBarMobile'
import Image from 'next/image'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div>
      <nav className='px-5 my-3 flex items-center justify-around'>
        <h1 className='text-2xl font-bold h-[32px] w-[108px] mr-10'>Bandage</h1>

        <section className='md:block hidden'>
          <ul className='flex gap-5 text-[14px] font-semibold text-[#737373]'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/shop/product'><li>Product</li></Link>
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

      <main className="w-[90%] max-w-[1100px] mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[545px] w-full">
          <div className="flex flex-col gap-5 text-center md:text-left relative z-10 px-5">
            <p className="text-[#252B42] font-bold">Contact Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#252B42]">Get in touch today</h2>
            <p className="text-[#737373] max-w-[376px] mx-auto md:mx-0">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mt-3">
              <p className="text-[#252B42]">+92 324 8184287</p>
              <Image
                src="/images/sm.png"
                alt="/"
                height={50}
                width={242}
                className="h-[50px] w-[242px] mx-auto md:mx-0"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <Image
              src="/images/hero-2.png"
              alt="/"
              height={729}
              width={1000}
              className="h-auto w-full md:h-[545px] md:w-[1000px] object-cover relative -z-10"
            />
          </div>
        </section>

        {/* Contact Image Section */}
        <section>
          {/* Desktop Image */}
          <Image
            src="/images/cont.png"
            alt="/"
            height={1000}
            width={1002}
            className="h-auto w-full md:h-[814px] md:w-auto hidden md:block"
          />
          {/* Mobile Image */}
          <Image
            src="/images/mobile-col.png"
            alt="/"
            height={1000}
            width={1002}
            className="h-auto w-full md:hidden block"
          />
        </section>

        {/* Call to Action Section */}
        <section className="flex flex-col gap-5 items-center text-center mt-10">
          <p className="text-sm font-bold text-[#737373]">
            Lorem, ipsum dolor sit amet consectetur
          </p>
          <h1 className="text-4xl md:text-[60px] font-bold">{"Let's talk"}</h1>
          <button className="bg-blue-400 text-white font-bold text-sm h-[52px] w-[186px] rounded-md shadow-md hover:bg-blue-500 transition">
            Try it for free Now
          </button>
        </section>
      </main>


      <div className='relative md:bottom-[500px] bottom-[6000px]'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact