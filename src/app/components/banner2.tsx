import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <section className="h-auto w-full relative z-10 md:top-[650px] top-[4500px] bg-[#23856D] text-white ">
  <div className="h-auto max-w-[1036px] mx-auto flex flex-col lg:flex-row">
    {/* Left Section */}
    <div className="w-full lg:w-[50%] h-auto flex flex-col items-center md:items-start justify-center gap-[30px] px-6 lg:px-0 lg:pt-[300px] relative md:bottom-[100px]">
      <h4 className="text-lg lg:text-xl font-[400]">Summer 2020</h4>
      <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-start">Vita Classic Product</h1>
      <p className="text-sm font-[400] w-full lg:w-[341px]">
        We know how large objects will act, We know how are objects will act, We know
      </p>
      <div className="flex gap-3 items-center md:flex-row flex-col">
        <h3 className="text-xl lg:text-2xl">$16.48</h3>
        <button className="text-sm font-bold h-[52px] w-[184px] bg-[#2DC071]">Add To Cart</button>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-[50%] h-auto flex justify-center items-center mt-6 lg:mt-0">
      <Image
        src="/images/boy-b-2.png"
        alt="/"
        height={1000}
        width={1000}
        className="w-[90%] lg:w-[443px] h-auto lg:h-[685px]"
      />
    </div>
  </div>
</section>
  )
}

export default Banner2