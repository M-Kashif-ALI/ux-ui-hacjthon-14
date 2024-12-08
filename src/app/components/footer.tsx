import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative md:top-[550px] top-[6050px] w-full h-auto">
  <div className="h-auto w-full px-5 lg:w-[1000px] mx-auto flex flex-col lg:flex-row items-start justify-between py-5">
    <div className="w-auto">
      <h3 className="text-2xl font-bold">Bandages</h3>
    </div>
    <div className="flex gap-4 mt-5 lg:mt-0 text-blue-500">
      <FaFacebook className="h-[20px] w-[20px]" />
      <FaInstagram className="h-[20px] w-[20px]" />
      <FaTwitter className="h-[20px] w-[20px]" />
    </div>
  </div>

  <div className="h-auto w-full px-5 lg:w-[1000px] mx-auto flex flex-col lg:flex-row justify-between py-5 gap-10">
    <div>
      <ul className="flex flex-col gap-2">
        <h2 className="mb-5 font-bold text-[#252B42]">Company Info</h2>
        <li className="text-sm font-bold text-[#737373]">About Us</li>
        <li className="text-sm font-bold text-[#737373]">Career</li>
        <li className="text-sm font-bold text-[#737373]">We are hiring</li>
        <li className="text-sm font-bold text-[#737373]">Blog</li>
      </ul>
    </div>
    <div>
      <ul className="flex flex-col gap-2">
        <h2 className="mb-5 font-bold text-[#252B42]">Legal</h2>
        <li className="text-sm font-bold text-[#737373]">Privacy Policy</li>
        <li className="text-sm font-bold text-[#737373]">Terms of Service</li>
        <li className="text-sm font-bold text-[#737373]">Refund Policy</li>
        <li className="text-sm font-bold text-[#737373]">Cookie Policy</li>
      </ul>
    </div>
    <div>
      <ul className="flex flex-col gap-2">
        <h2 className="mb-5 font-bold text-[#252B42]">Features</h2>
        <li className="text-sm font-bold text-[#737373]">Business Marketing</li>
        <li className="text-sm font-bold text-[#737373]">User Analytics</li>
        <li className="text-sm font-bold text-[#737373]">Live Chat</li>
        <li className="text-sm font-bold text-[#737373]">Unlimited Support</li>
      </ul>
    </div>
    <div>
      <ul className="flex flex-col gap-2">
        <h2 className="mb-5 font-bold text-[#252B42]">Resources</h2>
        <li className="text-sm font-bold text-[#737373]">iOS & Android</li>
        <li className="text-sm font-bold text-[#737373]">Watch a Demo</li>
        <li className="text-sm font-bold text-[#737373]">Customers</li>
        <li className="text-sm font-bold text-[#737373]">API</li>
      </ul>
    </div>
    <div>
      <ul className="flex flex-col gap-2">
        <h2 className="mb-5 font-bold text-[#252B42]">Get In Touch</h2>
        <div className="border h-[58px] flex items-center pl-2">
          <input
            type="text"
            placeholder="Enter Email"
            className="flex-grow focus:outline-none"
          />
          <button className="w-[117px] bg-[#23A6F0] text-white text-sm font-normal h-full">
            Subscribe
          </button>
        </div>
        <p className="text-[12px] text-[#737373]">Lorem ipsum dolor sit amet.</p>
      </ul>
    </div>
  </div>

  <div>
    <h6 className="text-sm font-bold text-[#737373] py-5 w-full text-center">
      Made With Love By Finland All Rights Reserved
    </h6>
  </div>
</footer>

  )
}

export default Footer