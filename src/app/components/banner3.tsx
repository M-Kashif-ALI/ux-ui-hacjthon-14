import Image from 'next/image'
import React from 'react'
import { LuAlarmClock } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscGraphLine } from 'react-icons/vsc'

const Banner3 = () => {
  return (
    <section className='h-[682px] w-full'>
      <div>
        <section className="h-auto w-full relative z-10 md:top-[650px] top-[4500px] ">
          <div className="h-auto max-w-full mx-auto flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-[50%] h-auto flex flex-col items-center md:items-start justify-center gap-[30px] px-6 lg:px-0 lg:pt-[300px] relative md:bottom-[100px] md:order-2">
              <h4 className="text-lg lg:text-xl font-bold text-[#737373]">Summer 2020</h4>
              <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-start">Part of the Neural Universe</h1>
              <p className="text-sm font-[400] w-full lg:w-[341px]">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div className="flex gap-3 items-center md:flex-row flex-col">
                <button className="text-sm font-bold h-[52px] w-[184px] bg-[#2DC071] text-white">Buy Now</button>
                <button className="text-sm font-bold h-[52px] w-[184px] border-[#2DC071] border text-[#2DC071]">Read Me</button>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-[50%] h-auto flex justify-center items-center mt-6 lg:mt-0 md:order-1 relative bottom-[25px] md:bottom-0">
              <Image
                src="/images/banner-clothes.png"
                alt="/"
                height={1000}
                width={1000}
                className="w-full lg:w-[443px] h-auto lg:h-[685px]"
              />
            </div>
          </div>
        </section>
      </div>

      <div className='md:hidden block relative top-[4500px] px-5 h-fit'>
        <div className='text-center flex flex-col gap-3'>
          <h6 className='text-[#23A6F0] font-bold text-sm'>Practice advice</h6>
          <h2 className='font-bold text-4xl'>Featured Products</h2>
          <p className='text-sm text-[#737373]'>Problems trying to resolve the conflict between the two major </p>
        </div>

        <div className='flex flex-col gap-1'>
        <div className="w-full max-w-[328px] md:max-w-[400px] bg-white shadow">
          <div>
            <div>
              <p className="h-[24px] w-[40px] bg-red-500 text-white text-sm font-bold text-center rounded relative top-[35px] left-[20px] z-10">
                New
              </p>
            </div>
            <div>
              <Image
                src="/images/m-blog-1.png"
                alt="/"
                width={1000}
                height={1000}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-[10px]">
            <div className="flex flex-wrap gap-[10px] md:gap-[15px] mt-2">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal">Trending</small>
              <small className="text-[12px] font-normal">New</small>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-lg md:text-xl font-normal">Name</h4>
              <p className="text-sm font-normal text-[#737373]">
                {"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
              </p>

              <div className="h-auto flex flex-wrap items-center justify-between gap-[10px] md:gap-0">
                <p className="flex gap-[5px] items-center">
                  <LuAlarmClock className="w-[16px] h-[16px] text-[#23A6F0]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
                <p className="flex gap-[5px] items-center">
                  <VscGraphLine className="w-[16px] h-[16px] text-[#23856D]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <h6 className="text-sm font-bold text-[#737373]">Learn more</h6>
                <span className="text-xl text-[#23A6F0]">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[328px] md:max-w-[400px] bg-white shadow">
          <div>
            <div>
              <p className="h-[24px] w-[40px] bg-red-500 text-white text-sm font-bold text-center rounded relative top-[35px] left-[20px] z-10">
                New
              </p>
            </div>
            <div>
              <Image
                src="/images/m-blog-1.png"
                alt="/"
                width={1000}
                height={1000}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-[10px]">
            <div className="flex flex-wrap gap-[10px] md:gap-[15px] mt-2">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal">Trending</small>
              <small className="text-[12px] font-normal">New</small>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-lg md:text-xl font-normal">Name</h4>
              <p className="text-sm font-normal text-[#737373]">
                {"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
              </p>

              <div className="h-auto flex flex-wrap items-center justify-between gap-[10px] md:gap-0">
                <p className="flex gap-[5px] items-center">
                  <LuAlarmClock className="w-[16px] h-[16px] text-[#23A6F0]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
                <p className="flex gap-[5px] items-center">
                  <VscGraphLine className="w-[16px] h-[16px] text-[#23856D]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <h6 className="text-sm font-bold text-[#737373]">Learn more</h6>
                <span className="text-xl text-[#23A6F0]">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[328px] md:max-w-[400px] bg-white shadow">
          <div>
            <div>
              <p className="h-[24px] w-[40px] bg-red-500 text-white text-sm font-bold text-center rounded relative top-[35px] left-[20px] z-10">
                New
              </p>
            </div>
            <div>
              <Image
                src="/images/m-blog-1.png"
                alt="/"
                width={1000}
                height={1000}
                className="w-full h-[200px] md:h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-[10px]">
            <div className="flex flex-wrap gap-[10px] md:gap-[15px] mt-2">
              <small className="text-[12px] font-normal text-[#8EC2F2]">Google</small>
              <small className="text-[12px] font-normal">Trending</small>
              <small className="text-[12px] font-normal">New</small>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h4 className="text-lg md:text-xl font-normal">Name</h4>
              <p className="text-sm font-normal text-[#737373]">
                {"We focus on ergonomics and meeting you where you work. It's only a keystroke away."}
              </p>

              <div className="h-auto flex flex-wrap items-center justify-between gap-[10px] md:gap-0">
                <p className="flex gap-[5px] items-center">
                  <LuAlarmClock className="w-[16px] h-[16px] text-[#23A6F0]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
                <p className="flex gap-[5px] items-center">
                  <VscGraphLine className="w-[16px] h-[16px] text-[#23856D]" />
                  <span className="text-sm text-[#737373] font-normal">
                    22 April 2021
                  </span>
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <h6 className="text-sm font-bold text-[#737373]">Learn more</h6>
                <span className="text-xl text-[#23A6F0]">
                  <MdKeyboardArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>


      </div>
    </section>
  )
}

export default Banner3