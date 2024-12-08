import Image from 'next/image'
import React from 'react'
import { LuAlarmClock } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscGraphLine } from 'react-icons/vsc'
import { posts } from '../data'

const FeaturedPost = () => {
  return (
    <section className='md:block hidden'>
    <div className='h-[1044px] w-[100%] relative top-[653px] flex flex-col items-center py-[100px] gap-[80px]'>
      <div className='w-[1050px]'>
        <div className='flex flex-col items-center gap-[10px]'>
          <h6 className='text-sm font-bold text-[#23A6F0]'>Practice Advice</h6>
          <h2 className='text-4xl font-bold text-[#252B42]'>Featured Posts</h2>
          <p className='text-sm text-[#737373] font-normal w-[450px] text-center'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
      </div>

      <div className='flex gap-[30px]'>
      {
      posts.map((d) => (
        <div className='w-[328px] h-[606px] bg-white' key={d.id}>
        <div>
          <div>
            <p className='h-[24px] w-[58px] bg-red-500 text-white text-sm font-bold text-center rounded relative top-[20px] left-[20px] px-[10px] z-10'>New</p>
          </div>
          <div>
            <Image src={d.img} alt={d.name} width={1000} height={1000} className='w-[348px] h-[300px] relative bottom-[25px]' />
          </div>
        </div>

        <div className='w-[348px] h-[606px] px-4 flex flex-col gap-[10px]'>
          <div className='flex gap-[15px]'>
            <small className='text-[12px] font-normal text-[#8EC2F2]'>
              Google
            </small>
            <small className='text-[12px] font-normal'>
              Trending
            </small>
            <small className='text-[12px] font-normal'>
              New
            </small>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h4 className='text-xl font-normal'>{d.name}</h4>
            <p className='text-sm font-normal text-[#737373] w-[280px]'>{"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}</p>

            <div className='h-[46px] w-[298px] mt-2 flex items-center justify-between'>
              <p className='flex gap-[5px] items-center'>
              <LuAlarmClock className='w-[16px] h-[16px] text-[#23A6F0]'/>
              <span className='text-sm text-[#737373] font-normal'>22 April 2021</span>
              </p>
              <p className='flex gap-[5px] items-center'>
              <VscGraphLine className='w-[16px] h-[16px] text-[#23856D]'/>
              <span className='text-sm text-[#737373] font-normal'>22 April 2021</span>
              </p>
            </div>

            <div className='flex gap-2 items-center'>
              <h6 className='text-sm font-bold text-[#737373]'>Learn more</h6>
              <span className='text-xl text-[#23A6F0]'>
              <MdKeyboardArrowRight />
              </span>
            </div>
          </div>
        </div>

      </div>
      ))
      }
      </div>
    </div>
    </section>
  )
}

export default FeaturedPost