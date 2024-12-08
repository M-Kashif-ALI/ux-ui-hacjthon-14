import Image from 'next/image';
import React from 'react';
import Filter from './filter';
import Footer from './footer';
import { featured, shop } from '../data';
import Link from 'next/link';

const ShopBanner = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="bg-[#FAFAFA]">
        <div className="h-auto w-full max-w-[1100px] mx-auto flex md:flex-nowrap flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <Link href='/shop/product' key={num}>
            <Image
              src={`/images/shop-b-${num}.png`}
              alt={`Shop Banner ${num}`}
              height={1000}
              width={1000}
              className="h-[180px] w-[160px] sm:h-[223px] sm:w-[205px]"
            />
            </Link>
          ))}
        </div>
      </div>

      {/* Filter Section */}
      <div className="h-auto w-full max-w-[1100px] mx-auto flex flex-col gap-4 md:flex-row md:h-[98px] md:justify-between md:items-center py-4">
        <h6 className="text-sm font-bold text-center md:text-left">Showing all 12 results</h6>
        <div className="flex items-center justify-center gap-2 md:gap-1">
          <h6 className="text-sm font-bold">Views:</h6>
          <Image
            src="/images/shop-view.png"
            alt="View Options"
            width={1000}
            height={1000}
            className="h-[46px] w-[107px]"
          />
        </div>
        <Filter />
      </div>

      <div className='my-3 md:block hidden'>
        <Image src='/images/desktop.png' alt='/' width={1000} height={1000} className='w-full h-[175px]'/>
      </div>

      {/* Shop Items Section */}
      <div className="hidden md:flex relative h-auto flex-wrap items-center justify-center gap-5 md:gap-8">
        {shop.map((d) => (
          <Link href='/shop/product' key={d.id} className="flex flex-col items-center">
            <Image
              src={d.img}
              alt={d.name}
              height={1000}
              width={1000}
              className="h-[320px] w-[180px] sm:h-[427px] sm:w-[239px]"
            />
            <div className="h-auto w-[180px] sm:w-[239px] flex flex-col items-center gap-3 mt-2">
              <h5 className="font-bold text-center">{d.name}</h5>
              <p className="text-sm font-bold text-[#737373]">{d.department}</p>
              <div className="font-bold flex justify-center gap-3">
                <p className="text-[#BDBDBD]">$16.48</p>
                <h5 className="text-[#23856D]">$6.48</h5>
              </div>
              <div className="flex gap-2">
                {['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((color, i) => (
                  <span
                    key={i}
                    className={`bg-[${color}] h-[16px] w-[16px] rounded-full cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Items for Mobile */}
      <div className="md:hidden flex flex-col items-center gap-6">
        {featured.map((d) => (
          <Link href='/shop/product' key={d.id} className="flex flex-col items-center cursor-pointer">
            <Image
              src={d.img}
              alt={d.name}
              height={1000}
              width={1000}
              className="h-[320px] w-[180px]"
            />
            <div className="h-auto w-[180px] flex flex-col items-center gap-3 mt-2">
              <h5 className="font-bold text-center">{d.name}</h5>
              <p className="text-sm font-bold text-[#737373]">{d.department}</p>
              <div className="font-bold flex justify-center gap-3">
                <p className="text-[#BDBDBD]">$16.48</p>
                <h5 className="text-[#23856D]">$6.48</h5>
              </div>
              <div className="flex gap-2">
                {['#23A6F0', '#23856D', '#E77C40', '#252B42'].map((color, i) => (
                  <span
                    key={i}
                    className={`bg-[${color}] h-[16px] w-[16px] rounded-full cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="relative flex justify-center my-8 cursor-pointer">
        <Image
          src="/images/Pagination.png"
          alt="Pagination"
          width={1000}
          height={1000}
          className="w-[313px] h-[74px]"
        />
      </div>

      <div className='my-3 md:hidden block'>
        <Image src='/images/mobile.png' alt='/' width={1000} height={1000} className='w-[414px] h-[1173px]'/>
      </div>


      {/* Footer */}
      <div className='relative md:bottom-[500px] bottom-[6000px]'>
      <Footer />
      </div>
    </section>
  );
};

export default ShopBanner;
