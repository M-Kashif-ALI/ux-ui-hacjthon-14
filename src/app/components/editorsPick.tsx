import Image from 'next/image'
import React from 'react'

const EditorsPick = () => {
  return (
    <section className="h-auto w-full flex items-center py-10">
  <div className="flex flex-col items-center w-full justify-center">
    {/* Header Section */}
    <div className="w-[90%] md:w-[607px] h-auto flex flex-col items-center text-center mb-8">
      <h3 className="font-bold text-2xl md:text-3xl">{"EDITOR’S PICK"}</h3>
      <p className="font-[400] text-sm text-[#737373] mt-2">
        Problems trying to resolve the conflict between
      </p>
    </div>

    {/* Image Grid */}
    <div className="h-auto w-[90%] md:w-[1050px] relative">
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-[30px]">
        {/* First Image Section */}
        <div className="relative h-[240px] md:h-[500px] w-full md:w-[510px]">
          <Image
            src="/images/boy.png"
            alt="boy"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
          <h3 className="absolute bottom-2 md:bottom-5 left-2 md:left-5 bg-white h-[36px] md:h-[48px] font-bold w-[120px] md:w-[170px] flex items-center justify-center text-sm md:text-base">
            MEN
          </h3>
        </div>

        {/* Second Image Section */}
        <div className="relative h-[240px] md:h-[500px] w-full md:w-[240px]">
          <Image
            src="/images/girl.png"
            alt="girl"
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
          />
          <h3 className="absolute bottom-2 md:bottom-5 left-2 md:left-5 bg-white h-[36px] md:h-[48px] font-bold w-[120px] md:w-[170px] flex items-center justify-center text-sm md:text-base">
            WOMEN
          </h3>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4 md:gap-[16px] w-full md:w-auto">
          {/* Third Image Section */}
          <div className="relative h-[200px] md:h-[242px] w-full md:w-[240px]">
            <Image
              src="/images/girl2.png"
              alt="accessories"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
            <h3 className="absolute bottom-2 md:bottom-5 left-2 md:left-5 bg-white h-[36px] md:h-[48px] font-bold w-[120px] md:w-[170px] flex items-center justify-center text-sm md:text-base">
              ACCESSORIES
            </h3>
          </div>

          {/* Fourth Image Section */}
          <div className="relative h-[200px] md:h-[242px] w-full md:w-[240px]">
            <Image
              src="/images/boy2.png"
              alt="kids"
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
            <h3 className="absolute bottom-2 md:bottom-5 left-2 md:left-5 bg-white h-[36px] md:h-[48px] font-bold w-[120px] md:w-[170px] flex items-center justify-center text-sm md:text-base">
              KIDS
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default EditorsPick