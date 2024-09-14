import React from 'react'
import HeroIMG from "../assets/heroImg.jpg"
import MobileHero from "../assets/mobileHero.jpg"
import Shopify from "../assets/shopify_monotone_black.svg"
import { IoMdStar } from "react-icons/io";

const HeroSection = () => {
  return (
    <div>
        <div className='md:flex justify-center items-center gap-5 p-8 md:pl-40 md:pr-28 bg-[#faf6ef] md:bg-white'>
          <div className='block md:hidden'>
              <img src={MobileHero} alt="Hero Section Image"/>
          </div>
          <div className='md:w-2/3'>
              <p className='leading-tight text-4xl md:text-6xl md:font-semibold py-8'>Scale globally and sustainably with Gelato's local production</p>
              <p className='text-2xl pb-3'>Sign up for free and only pay for what you sell</p>
              <p className='opacity-65 text-sm font-thin pr-16'>Turn your passion into profit with the world's largest <a href="#" className='underline underline-offset-auto hover:text-gray-500'>print on demand</a> network.</p>

              <div className='flex justify-start items-center gap-4 py-8'>
                  <button type="button" className='bg-black font-semibold text-sm text-white hover:text-gray-500 border-2 border-black rounded-full px-3 py-2'>Get started for free</button>
                  <button type="button" className='font-semibold text-sm hover:bg-gray-200 border-[1px] border-gray-400 rounded-full px-3 py-2'>See our products</button>
              </div>

              <div className='w-2/6'>
                <img src={Shopify} alt="Shopify" className='pb-1'/>
                <p className='hover:text-gray-400'><span className='flex justify-start items-center'>
                <IoMdStar className='text-2xl text-gray-400'/>
                <IoMdStar className='text-2xl text-gray-400'/>
                <IoMdStar className='text-2xl text-gray-400'/>
                <IoMdStar className='text-2xl text-gray-400'/>
                <IoMdStar className='text-2xl text-gray-400'/>
                4.8/5 
                </span> 
                based on 887 reviews</p>
              </div>
          </div>
          <div className='hidden md:block'>
              <img src={HeroIMG} alt="Hero Section Image"/>
          </div>
        </div>

      <div className='hidden md:flex justify-center items-center  gap-20 text-center text-2xl p-10 px-40 bg-[#faf6ef]'>
        <p> <span className='text-4xl'>90%</span><br /> of all orders are produced locally</p>
        <p> <span className='text-4xl'>90%</span><br /> of orders arrive within 5 days of ordering </p>
        <p> <span className='text-4xl'>140+</span><br /> print providers across 32 countries</p>
      </div>
    </div>
  )
}

export default HeroSection
