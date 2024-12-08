import Image from 'next/image'
import Footer from '../components/footer'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import NavBarMobile from '../components/navBarMobile'

const About = () => {
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
      <main className='w-full mx-auto'>
        {/* Section 1: About Us */}
        <section className='flex flex-col md:flex-row items-center justify-center h-auto md:h-[545px] w-full'>
          <div className='flex flex-col gap-5 text-center md:text-left relative z-10 px-5'>
            <p className='text-[#252B42] font-bold'>About company</p>
            <h2 className='text-3xl md:text-5xl font-bold text-[#252B42]'>ABOUT US</h2>
            <p className='text-[#737373] max-w-[376px] mx-auto md:mx-0'>
              We know how large objects will act, but things on a small scale
            </p>
            <button className='text-white font-bold text-sm bg-[#23A6F0] h-[52px] w-[195px] mx-auto md:mx-0'>
              Get Quote Now
            </button>
          </div>
          <div>
            <Image
              src={'/images/hero-2.png'}
              alt='/'
              height={729}
              width={1000}
              className='h-auto w-full md:h-[545px] md:w-[1000px] object-cover relative -z-10'
            />
          </div>
        </section>

        {/* Section 2: Problems Trying */}
        <section className='mt-10'>
          <div className='relative text-center px-5'>
            <p className='text-red-500 text-sm'>Problems Trying</p>
            <p className='text-2xl font-bold mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores totam quidem, dicta dignissimos.
            </p>
          </div>
          <div className='text-sm text-[#737373] mt-5 px-5 md:px-0 text-center md:text-left'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos aspernatur voluptate distinctio vero, dolor error minus quia labore. Recusandae ab obcaecati.
          </div>
        </section>

        {/* Section 3: Statistics */}
        <section className='mt-10 flex flex-col md:flex-row justify-evenly items-center gap-5'>
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className='flex items-center flex-col'>
              <h3 className='text-[48px] font-bold'>15K</h3>
              <p className='text-sm text-[#737373]'>Happy Customers</p>
            </div>
          ))}
        </section>

        {/* Section 4: Video Section */}
        <section className='mx-auto mt-10 px-5'>
          <Image src={'/images/vid.png'} alt='/' width={1000} height={1000} className='w-full h-auto' />
        </section>

        {/* Section 5: Meet Our Team */}
        <section className='mt-10 px-5'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='text-[#252B42] font-bold text-2xl md:text-[40px]'>Meet Our Team</h2>
            <p className='text-sm max-w-[469px] mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, recusandae?
            </p>
          </div>
          <div className='mt-5'>
            <Image
              src={'/images/row.png'}
              alt='/'
              width={1000}
              height={1000}
              className='hidden md:block w-full h-auto'
            />
            <Image
              src={'/images/container.png'}
              alt='/'
              width={1000}
              height={1000}
              className='block md:hidden w-full h-auto'
            />
          </div>
        </section>

        {/* Section 6: Big Companies */}
        <section className='mt-10 px-5 text-center'>
          <div>
            <h2 className='text-[32px] md:text-[40px] font-bold my-5'>Big Companies Are Here</h2>
            <p className='text-sm text-[#737373] max-w-[547px] mx-auto'>
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className='mt-5'>
            <Image
              src={'/images/desktop.png'}
              alt='/'
              width={1000}
              height={1000}
              className='hidden md:block w-full h-auto'
            />
            <Image
              src={'/images/mobile.png'}
              alt='/'
              width={1000}
              height={1000}
              className='block md:hidden w-full h-auto'
            />
          </div>
        </section>

        {/* Section 7: About Section */}
        <section className='mt-10'>
          <Image
            src={'/images/about.png'}
            alt='/'
            width={1000}
            height={1000}
            className='hidden md:block w-full h-auto'
          />
          <Image
            src={'/images/mobile-a.png'}
            alt='/'
            width={1000}
            height={1000}
            className='block md:hidden w-full h-auto'
          />
        </section>
      </main>


      <div className='relative bottom-[6050px] md:bottom-[500px]'>
        <Footer />
      </div>
    </div>
  )
}

export default About