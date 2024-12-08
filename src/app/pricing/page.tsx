import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import NavBarMobile from '../components/navBarMobile'
import Image from 'next/image'
import Footer from '../components/footer'

const Pricing = () => {
  return (
    <div>
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

      <main className="w-[90%] mx-auto">
        <div className="flex flex-col gap-5">
          {/* Header Section */}
          <section className="flex flex-col items-center justify-center mt-5">
            <p className="text-sm font-bold">Pricing</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-center">Simple Pricing</h2>
            <p className="text-sm font-bold text-[#737373]">
              Home / <span>Pricing</span>
            </p>
          </section>

          {/* Pricing Overview Section */}
          <section className="flex flex-col items-center justify-center mt-5">
            <h2 className="text-[32px] md:text-[40px] font-bold text-center">Pricing</h2>
            <p className="text-[#737373] text-sm font-bold w-full max-w-[469px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at eum est nesciunt aliquid suscipit tempore voluptates ipsa enim? Non dolores blanditiis rerum minima voluptatem! Nisi iusto ratione odit consequuntur.
            </p>
            <Image
              src={"/images/switch.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-[44px] w-auto mt-3"
            />
          </section>

          {/* Pricing Tables Section */}
          <section>
            {/* Desktop View */}
            <Image
              src={"/images/p-row.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-[704px] w-full hidden md:block"
            />
            {/* Mobile View */}
            <Image
              src={"/images/col.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-auto w-[414px] md:hidden block"
            />

            {/* Additional Pricing */}
            <Image
              src={"/images/p-d.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-[365px] w-full hidden md:block"
            />
            <Image
              src={"/images/mb-col.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-auto w-[414px] md:hidden block"
            />
          </section>

          {/* FAQ Section */}
          <section className="flex flex-col items-center">
            <h1 className="text-[36px] md:text-[50px] font-bold text-center">Pricing FAQs</h1>
            <p className="text-sm text-[#737373] w-full max-w-[552px] text-center mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae natus a ipsam sed autem. Ullam sapiente, reiciendis distinctio.
            </p>

            {/* FAQ Items */}
            <div className="mt-5 flex flex-col md:flex-row gap-[30px]">
              <div>
                <h1 className="text-lg font-bold">Lorem ipsum dolor</h1>
                <p className="w-full max-w-[408px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis architecto cum eum eos quos.
                </p>
              </div>
              <div>
                <h1 className="text-lg font-bold">Lorem ipsum dolor</h1>
                <p className="w-full max-w-[408px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis architecto cum eum eos quos.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col md:flex-row gap-[30px]">
              <div>
                <h1 className="text-lg font-bold">Lorem ipsum dolor</h1>
                <p className="w-full max-w-[408px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis architecto cum eum eos quos.
                </p>
              </div>
              <div>
                <h1 className="text-lg font-bold">Lorem ipsum dolor</h1>
                <p className="w-full max-w-[408px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis architecto cum eum eos quos.
                </p>
              </div>
            </div>

            <h3 className="text-xl mt-10 text-[#737373] text-center">
              Haven’t got your answer? Contact our support
            </h3>
          </section>

          {/* 14 Days Section */}
          <section>
            {/* Desktop View */}
            <Image
              src={"/images/14-days.png"}
              alt="/"
              width={1000}
              height={1000}
              className="w-full md:block hidden"
            />
            {/* Mobile View */}
            <Image
              src={"/images/mb-14.png"}
              alt="/"
              width={1000}
              height={1000}
              className="h-auto w-[414px] md:hidden block"
            />
          </section>
        </div>
      </main>


      <div className='relative md:bottom-[600px] bottom-[6100px]'>
        <Footer />
      </div>
    </div>
  )
}

export default Pricing