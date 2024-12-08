import Image from 'next/image'
import React from 'react'

const Banner1 = () => {
  return (
    <section className="text-white mb-20 relative">
  {/* Background Image */}
  <Image
    src="/images/women-banner.jpg"
    alt="banner1"
    height={1000}
    width={1000}
    className="h-[400px] md:h-[716px] w-full absolute -z-10 object-cover"
  />
  
  {/* Content Section */}
  <div className="relative z-10 px-6 md:px-[150px] py-10 md:py-[100px] h-auto md:h-[651px] flex items-center">
    <div className="flex flex-col justify-center gap-6 md:gap-10 w-full max-w-[500px]">
      <h5 className="font-[700] text-base md:text-lg">Summer 2020</h5>
      <h1 className="font-bold text-3xl md:text-6xl">NEW COLLECTION</h1>
      <h4 className="text-base md:text-xl w-[250px] md:w-[360px]">
        We know how large objects will act, but things on a small scale.
      </h4>
      <button className="bg-[#2DC071] h-[50px] md:h-[62px] w-[150px] md:w-[221px] font-bold text-lg md:text-2xl">
        Shop Now
      </button>
    </div>
  </div>
</section>

  )
}

export default Banner1