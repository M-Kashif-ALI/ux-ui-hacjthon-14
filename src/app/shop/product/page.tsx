import Footer from '@/app/components/footer'
import ShopNavBar from '@/app/components/shopNavBar'
import { products } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'

const product = () => {
  return (
    <section>
      <ShopNavBar />
      <div className='w-full max-w-[1100px] mx-auto flex flex-col p-4'>
        <div className='text-sm font-bold flex gap-1 text-[#BDBDBD] items-center my-5'>
          <Link href='/' className='text-[#252B42]'>Home</Link> <IoIosArrowForward /> <span>Shop</span>
        </div>

        <div className='h-auto md:h-[598px] w-full flex flex-col md:flex-row gap-4 md:gap-[30px]'>
          <div className='w-full md:w-[710px]'>
            <Image src='/images/product1.png' alt='/' width={1000} height={1000} className='h-[450px] w-full object-cover' />
          </div>

          <div className='flex flex-col gap-[15px]'>
            <h4 className='text-xl'>Floating Phone</h4>
            <div className='flex items-center gap-2'>
              <Image src='/images/stars.png' alt='/' width={1000} height={1000} className='h-[22px] w-[130px]' />
              <h6 className='text-[#737373] font-bold text-sm'>10 Reviews</h6>
            </div>
            <div>
              <h3 className='font-bold text-2xl'>$1,139.33</h3>
              <div className='flex font-bold text-sm gap-2 my-3'>
                <p>Availablity</p>
                <span>:</span>
                <p className='text-blue-500'>In Stock</p>
              </div>
              <p className='text-[#737373] text-sm border-b-[1.8px] py-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

              <div className='flex gap-2 my-5'>
                <p className='bg-[#23A6F0] h-[30px] w-[30px] rounded-full'></p>
                <p className='bg-[#2DC071] h-[30px] w-[30px] rounded-full'></p>
                <p className='bg-[#E77C40] h-[30px] w-[30px] rounded-full'></p>
                <p className='bg-[#252B42] h-[30px] w-[30px] rounded-full'></p>
              </div>

              <div className='flex items-center gap-3'>
                <button className='h-[44px] w-full md:w-[148px] bg-[#23A6F0] text-sm text-white font-bold rounded'>Select option</button>
                <CiHeart className='h-[20px] w-[20px]' />
                <IoCartOutline className='h-[20px] w-[20px]' />
                <FaEye className='h-[20px] w-[20px]' />
              </div>
            </div>
          </div>
        </div>

        <div className='h-auto w-full pb-8'>
          <div className='flex flex-col md:flex-row items-center justify-around border-b-[2px] pb-5 text-[#737373] font-bold py-2'>
            <p className='w-full md:w-auto'>Description</p>
            <p className='w-full md:w-auto'>Additional Information</p>
            <p className='w-full md:w-auto'>Reviews (0)</p>
          </div>

          <div className='h-auto md:h-[499px] w-full md:w-[1056px] mx-auto flex flex-col md:flex-row gap-6 pt-10'>
            <div className='w-full md:w-[316px]'>
              <Image src={'/images/room.png'} alt='/' height={1000} width={1000} className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>The Quick Fox Jumps Over</h1>
                <p className='w-full md:w-[332px] text-sm text-[#737373]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo deleniti repellat ducimus, autem nihil quis natus modi quo incidunt ut rerum assumenda! Provident debitis consequatur numquam.</p>
                <p className='w-full md:w-[332px] text-sm text-[#737373]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo deleniti repellat ducimus, autem nihil quis natus modi quo incidunt ut.</p>
                <p className='w-full md:w-[332px] text-sm text-[#737373]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo deleniti repellat ducimus, autem nihil quis natus.</p>
              </div>

              <div className='flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>The Quick Fox Jumps Over</h1>
                <p className='w-full md:w-[332px] text-sm text-[#737373]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo deleniti repellat ducimus, autem nihil quis natus modi quo incidunt ut rerum assumenda! Provident debitis consequatur numquam.</p>
                <h1 className='text-2xl font-bold'>The Quick Fox Jumps Over</h1>
                <p className='w-full md:w-[332px] text-sm text-[#737373]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo deleniti repellat ducimus, autem nihil quis natus modi quo incidunt ut.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#FAFAFA] h-[1086px] w-full flex flex-col items-center'>
          <h3 className='font-bold text-[#252B42] text-2xl border-b-[2px] w-full pb-4'>BESTSELLER PRODUCTS</h3>

          <div className='h-[615px] flex flex-wrap items-center justify-center gap-[30px] mt-5'>
        {
          products.map((d) => (
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
        </div>
        </div>
          ))
        }
      </div>
        </div>

        <div className='md:block hidden'>
          <Image src={'/images/desktop.png'} alt='/' width={1000} height={1000} className='h-[175px] w-full'/>
        </div>
        <div className='md:hidden block relative top-[4200px]'>
          <Image src={'/images/mobile.png'} alt='/' width={1000} height={1000} className='h-[1173px] w-[414px]'/>
        </div>
      </div>
      <div className='relative bottom-[2000px] md:bottom-[550px]'>
      <Footer />
      </div>
    </section>
  )
}

export default product